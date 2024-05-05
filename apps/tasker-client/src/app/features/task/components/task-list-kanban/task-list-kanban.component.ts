import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  inject,
} from "@angular/core";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragPlaceholder,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { TuiDialogService } from "@taiga-ui/core";
import { TuiButtonModule, TuiSkeletonModule } from "@taiga-ui/experimental";
import { AsyncPipe } from "@angular/common";
import { SaveTaskDialogComponent } from "../save-task-dialog/save-task-dialog.component";
import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import { TaskService } from "../../services/task.service";
import { TaskListCardComponent } from "../task-list-card/task-list-card.component";
import { TuiRepeatTimesModule } from "@taiga-ui/cdk";
import { Task, TaskStatus } from "../../interfaces/task";

@Component({
  selector: "task-list-kanban",
  standalone: true,
  imports: [
    CdkDropList,
    CdkDrag,
    CdkDragPlaceholder,
    TuiButtonModule,
    TuiSkeletonModule,
    AsyncPipe,
    TaskListCardComponent,
    TaskListKanbanComponent,
    TuiRepeatTimesModule,
  ],
  templateUrl: "./task-list-kanban.component.html",
  styleUrl: "./task-list-kanban.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListKanbanComponent {
  private readonly dialogService = inject(TuiDialogService);
  private readonly taskService = inject(TaskService);
  private readonly injector = inject(Injector);

  @Input({ required: true }) listTitle!: string;
  @Input({ required: true }) taskList!: Task[];
  @Input({ required: true }) listTaskStatus!: TaskStatus;

  public readonly taskOperationStatus$ = this.taskService.status$;

  public onDrop({
    currentIndex,
    previousIndex,
    container,
    previousContainer,
  }: CdkDragDrop<Task[]>) {
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
}
