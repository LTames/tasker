import { PolymorpheusComponent } from "@tinkoff/ng-polymorpheus";
import {
  ChangeDetectionStrategy,
  Component,
  Injector,
  Input,
  inject,
} from "@angular/core";
import {
  TuiButtonModule,
  TuiCardModule,
  TuiChipModule,
  TuiSurfaceModule,
} from "@taiga-ui/experimental";
import {
  TuiDataListModule,
  TuiDialogService,
  TuiDropdownModule,
  TuiSvgModule,
} from "@taiga-ui/core";
import { TUI_PROMPT, TuiPromptData } from "@taiga-ui/kit";
import { SaveTaskDialogComponent } from "../save-task-dialog/save-task-dialog.component";
import { TaskService } from "../../services/task.service";
import { DatePipe } from "@angular/common";
import { TuiActiveZoneModule, TuiObscuredModule } from "@taiga-ui/cdk";
import { CdkDragPlaceholder } from "@angular/cdk/drag-drop";
import { Task } from "../../interfaces/task";

@Component({
  selector: "task-list-card",
  standalone: true,
  imports: [
    TuiCardModule,
    TuiSurfaceModule,
    TuiDropdownModule,
    TuiButtonModule,
    TuiDataListModule,
    TuiSvgModule,
    TuiChipModule,
    DatePipe,
    TuiActiveZoneModule,
    TuiObscuredModule,
    CdkDragPlaceholder,
  ],
  templateUrl: "./task-list-card.component.html",
  styleUrl: "./task-list-card.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListCardComponent {
  private readonly dialogService = inject(TuiDialogService);
  private readonly injector = inject(Injector);
  private readonly taskService = inject(TaskService);

  @Input({ required: true }) task!: Task;
  public taskOptionsIsOpen = false;

  public editTask(selectedTask: Task) {
    this.dialogService
      .open(new PolymorpheusComponent(SaveTaskDialogComponent, this.injector), {
        closeable: false,
        label: "Edit task",
        data: { taskId: selectedTask.id },
      })
      .subscribe();
  }

  public deleteTask(selectedTask: Task) {
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

  public openTaskOptions(e: Event) {
    e.stopPropagation();
    this.taskOptionsIsOpen = !this.taskOptionsIsOpen;
  }

  public onObscured(obscured: boolean): void {
    if (obscured) {
      this.taskOptionsIsOpen = false;
    }
  }

  public onActiveZone(active: boolean): void {
    this.taskOptionsIsOpen = active && this.taskOptionsIsOpen;
  }
}
