import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskDialogComponent } from './new-task-dialog.component';

describe('NewTaskDialogComponent', () => {
  let component: NewTaskDialogComponent;
  let fixture: ComponentFixture<NewTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewTaskDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
