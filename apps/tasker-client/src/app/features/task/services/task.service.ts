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
  throwError,
} from "rxjs";
import { HttpErrorService } from "../../../shared/services/http-error.service";
import { NotificationService } from "../../../shared/services/notification.service";
import {
  CreateTask,
  Task,
  TaskOperationStatus,
  UpdateTask,
  UpdateTaskStatus,
} from "../interfaces/task";

@Injectable({
  providedIn: "root",
})
export class TaskService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(HttpErrorService);
  private readonly notificationService = inject(NotificationService);

  private readonly statusSubject = new BehaviorSubject<TaskOperationStatus>(
    "PENDING",
  );
  public readonly status$ = this.statusSubject.asObservable();

  private readonly createTaskAction$ = new Subject<CreateTask>();
  private readonly deleteTaskByIdAction$ = new Subject<number>();
  private readonly updateTaskAction$ = new Subject<UpdateTask>();

  public readonly taskAdded$ = this.createTaskAction$.pipe(
    tap(() => this.statusSubject.next("CREATING")),
    concatMap((reqBody) =>
      this.http.post<Task>(`${environment.apiUrl}/tasks`, reqBody).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occurred while trying to save a new task",
          );
          this.statusSubject.next("ERROR");
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
    tap(() => this.statusSubject.next("DELETING")),
    concatMap((taskId) =>
      this.http.delete<void>(`${environment.apiUrl}/tasks/${taskId}`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            `An error occurred while trying to delete task with id: ${taskId}`,
          );
          this.statusSubject.next("ERROR");
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
    tap(() => this.statusSubject.next("UPDATING")),
    concatMap(({ task, taskId }) =>
      this.http.put<Task>(`${environment.apiUrl}/tasks/${taskId}`, task).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            `An error occurred while trying to update task with id: ${taskId}`,
          );
          this.statusSubject.next("ERROR");
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
  ).pipe(tap(() => this.statusSubject.next("SUCCESS")));

  public readonly taskList$ = this.taskEvents$.pipe(
    startWith(null),
    tap(() => this.statusSubject.next("LOADING")),
    switchMap(() =>
      this.http.get<Task[]>(`${environment.apiUrl}/tasks`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occured while trying to get your tasks",
          );

          this.statusSubject.next("ERROR");
          return throwError(() => err);
        }),
      ),
    ),
    tap(() => this.statusSubject.next("SUCCESS")),
    share(),
  );

  public getTaskById(id: number) {
    return this.http.get<Task>(`${environment.apiUrl}/tasks/${id}`).pipe(
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

  public addTask(newTask: CreateTask) {
    this.createTaskAction$.next(newTask);
  }

  public updateTask(updateTask: UpdateTask) {
    this.updateTaskAction$.next(updateTask);
  }
}
