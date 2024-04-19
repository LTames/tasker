import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  concatMap,
  merge,
  share,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { TaskRequest } from "../interfaces/task-request.interface";
import { HttpErrorService } from "../../../shared/services/http-error.service";
import { TaskResponse } from "../interfaces/task-response.interface";
import { TaskStatus } from "../interfaces/task-status.type";
import { NotificationService } from "../../../shared/services/notification.service";

type TaskOperationStatus =
  | "pending"
  | "loading"
  | "deleting"
  | "creating"
  | "updating"
  | "success"
  | "error";

interface UpdateTask {
  task: TaskRequest;
  taskId: number;
}

interface UpdateTaskStatus {
  status: TaskStatus;
  taskId: number;
}

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(HttpErrorService);
  private readonly notificationService = inject(NotificationService);

  private readonly statusSubject = new BehaviorSubject<TaskOperationStatus>(
    "pending",
  );
  public readonly status$ = this.statusSubject.asObservable();

  private readonly createTaskAction$ = new Subject<TaskRequest>();
  private readonly deleteTaskByIdAction$ = new Subject<number>();
  private readonly updateTaskAction$ = new Subject<UpdateTask>();

  public readonly taskAdded$ = this.createTaskAction$.pipe(
    tap(() => this.statusSubject.next("creating")),
    concatMap((reqBody) =>
      this.http.post<TaskResponse>(`${environment.apiUrl}/tasks`, reqBody).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occurred while trying to save a new task",
          );
          this.statusSubject.next("error");
          return EMPTY;
        }),
      ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        status: "success",
        label: "Task created successfully",
      }),
    ),
    share(),
  );

  public readonly taskDeleted$ = this.deleteTaskByIdAction$.pipe(
    tap(() => this.statusSubject.next("deleting")),
    concatMap((taskId) =>
      this.http.delete<void>(`${environment.apiUrl}/tasks/${taskId}`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            `An error occurred while trying to delete task with id: ${taskId}`,
          );
          this.statusSubject.next("error");
          return EMPTY;
        }),
      ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        status: "success",
        label: "Task deleted successfully",
      }),
    ),
    share(),
  );

  public readonly taskUpdated$ = this.updateTaskAction$.pipe(
    tap(() => this.statusSubject.next("updating")),
    concatMap(({ task, taskId }) =>
      this.http
        .put<TaskResponse>(`${environment.apiUrl}/tasks/${taskId}`, task)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              `An error occurred while trying to update task with id: ${taskId}`,
            );
            this.statusSubject.next("error");
            return EMPTY;
          }),
        ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        status: "success",
        label: "Task updated successfully",
      }),
    ),
    share(),
  );

  private readonly taskEvents$ = merge(
    this.taskAdded$,
    this.taskDeleted$,
    this.taskUpdated$,
  ).pipe(tap(() => this.statusSubject.next("success")));

  public readonly taskList$ = this.taskEvents$.pipe(
    startWith(null),
    tap(() => this.statusSubject.next("loading")),
    switchMap(() =>
      this.http.get<TaskResponse[]>(`${environment.apiUrl}/tasks`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occured while trying to get your tasks",
          );

          this.statusSubject.next("error");
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.statusSubject.next("success")),
  );

  public getTaskById(id: number) {
    return this.http
      .get<TaskResponse>(`${environment.apiUrl}/tasks/${id}`)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          return this.errorService.handleError(
            err,
            `An error occured while trying to retrieve your task with ID: ${id}`,
          );
        }),
      );
  }

  public updateTaskStatus(updateTaskStatus: UpdateTaskStatus) {
    return this.http.patch(
      `${environment.apiUrl}/tasks/task-status/${updateTaskStatus.taskId}`,
      { status: updateTaskStatus.status },
    );
  }

  public deleteTask(taskId: number) {
    this.deleteTaskByIdAction$.next(taskId);
  }

  public addTask(newTask: TaskRequest) {
    this.createTaskAction$.next(newTask);
  }

  public updateTask(updateTask: UpdateTask) {
    this.updateTaskAction$.next(updateTask);
  }
}
