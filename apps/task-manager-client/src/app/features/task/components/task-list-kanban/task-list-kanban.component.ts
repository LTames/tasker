import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  inject,
} from "@angular/core";
import { TaskResponse } from "../../interfaces/task-response.interface";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import {
  TuiDataListModule,
  TuiDialogService,
  TuiHostedDropdownModule,
  TuiScrollbarModule,
  TuiSvgModule,
} from "@taiga-ui/core";
import {
  TuiButtonModule,
  TuiCardModule,
  TuiChipModule,
  TuiSkeletonModule,
  TuiSurfaceModule,
} from "@taiga-ui/experimental";
import { AsyncPipe, DatePipe, NgFor, NgIf } from "@angular/common";
import { SaveTaskDialogComponent } from "../save-task-dialog/save-task-dialog.component";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { TaskService } from "../../services/task.service";
import { TUI_PROMPT, TuiPromptData } from "@taiga-ui/kit";
import { TaskStatus } from "../../interfaces/task-status.type";
import { ReplaceStringPipe } from "../../../../shared/pipes/replace-string.pipe";

@Component({
  selector: "task-list-kanban",
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    TuiScrollbarModule,
    TuiSvgModule,
    TuiCardModule,
    TuiSurfaceModule,
    TuiScrollbarModule,
    TuiButtonModule,
    TaskListKanbanComponent,
    TuiSkeletonModule,
    NgFor,
    NgIf,
    AsyncPipe,
    TuiHostedDropdownModule,
    TuiDataListModule,
    TuiChipModule,
    ReplaceStringPipe,
    DatePipe,
  ],
  templateUrl: "./task-list-kanban.component.html",
  styleUrl: "./task-list-kanban.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListKanbanComponent {
  private readonly dialogService = inject(TuiDialogService);
  private readonly taskService = inject(TaskService);
  private readonly injector = inject(Injector);

  @Input({ required: true }) listTitle = "";
  @Input({ required: true }) taskList: TaskResponse[] = [];
  @Input({ required: true }) listTaskStatus: TaskStatus | null = null;

  public readonly taskOperationStatus$ = this.taskService.status$;

  public onDrop({
    currentIndex,
    previousIndex,
    container,
    previousContainer,
  }: CdkDragDrop<TaskResponse[]>) {
    if (container === previousContainer) {
      moveItemInArray(container.data, previousIndex, currentIndex);
      return;
    }

    transferArrayItem(
      previousContainer.data,
      container.data,
      previousIndex,
      currentIndex,
    );

    this.taskService
      .updateTaskStatus({
        status: this.listTaskStatus!,
        taskId: container.data[currentIndex].id,
      })
      .subscribe();
  }

  public newTask() {
    this.dialogService
      .open(new PolymorpheusComponent(SaveTaskDialogComponent, this.injector), {
        closeable: false,
        label: "Create task",
        data: { initialTaskStatus: this.listTaskStatus },
      })
      .subscribe();
  }

  public editTask(selectedTask: TaskResponse, event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.dialogService
      .open(new PolymorpheusComponent(SaveTaskDialogComponent, this.injector), {
        closeable: false,
        label: "Edit task",
        data: { taskId: selectedTask.id },
      })
      .subscribe();
  }

  public deleteTask(selectedTask: TaskResponse) {
    this.dialogService
      .open<boolean>(TUI_PROMPT, {
        closeable: false,
        label: "Delete task",
        size: "s",
        data: {
          content: "Are you sure you want to delete this task?",
        } as TuiPromptData,
      })
      .subscribe((deleteConfirmation) => {
        if (deleteConfirmation) {
          this.taskService.deleteTask(selectedTask.id);
        }
      });
  }
}
