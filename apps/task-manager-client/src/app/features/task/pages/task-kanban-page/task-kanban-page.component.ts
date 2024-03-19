import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'task-kanban-page',
  standalone: true,
  imports: [],
  templateUrl: './task-kanban-page.component.html',
  styleUrl: './task-kanban-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskKanbanPageComponent {}
