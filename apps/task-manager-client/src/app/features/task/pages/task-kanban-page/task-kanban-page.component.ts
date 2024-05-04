import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { CdkDropListGroup } from "@angular/cdk/drag-drop";
import { AsyncPipe, NgIf } from "@angular/common";
import { TaskService } from "../../services/task.service";
import { catchError, map, of, startWith } from "rxjs";
import { TaskListKanbanComponent } from "../../components/task-list-kanban/task-list-kanban.component";
import { Task } from "../../interfaces/task";

interface FilteredTasks {
  pending: Task[];
  inProgress: Task[];
  done: Task[];
}

@Component({
  selector: "task-kanban-page",
  standalone: true,
  imports: [CdkDropListGroup, NgIf, AsyncPipe, TaskListKanbanComponent],
  templateUrl: "./task-kanban-page.component.html",
  styleUrl: "./task-kanban-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskKanbanPageComponent {
  private readonly taskService = inject(TaskService);

  public readonly taskList$ = this.taskService.taskList$.pipe(
    catchError(() => of([])),
  );

  public readonly filteredTasks$ = this.taskList$.pipe(
    map((taskList) => this.separateTasksByStatus(taskList)),
    startWith({
      pending: [],
      inProgress: [],
      done: [],
    }),
  );

  private separateTasksByStatus(tasks: Task[]) {
    return tasks.reduce<FilteredTasks>(
      (filter, task) => {
        switch (task.status) {
          case "PENDING":
            filter.pending.push(task);
            break;
          case "IN_PROGRESS":
            filter.inProgress.push(task);
            break;
          case "DONE":
            filter.done.push(task);
            break;
        }

        return filter;
      },
      { pending: [], inProgress: [], done: [] },
    );
  }
}
