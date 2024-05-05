import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskKanbanPageComponent } from './task-kanban-page.component';

describe('TaskKanbanPageComponent', () => {
  let component: TaskKanbanPageComponent;
  let fixture: ComponentFixture<TaskKanbanPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskKanbanPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskKanbanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
