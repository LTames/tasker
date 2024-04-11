import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListKanbanComponent } from './task-list-kanban.component';

describe('TaskListKanbanComponent', () => {
  let component: TaskListKanbanComponent;
  let fixture: ComponentFixture<TaskListKanbanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListKanbanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListKanbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
