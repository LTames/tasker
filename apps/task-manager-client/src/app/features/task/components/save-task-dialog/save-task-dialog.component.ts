import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import {
  BehaviorSubject,
  EMPTY,
  catchError,
  combineLatest,
  filter,
  map,
  merge,
  of,
  share,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import {
  AsyncPipe,
  NgFor,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
} from "@angular/common";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";
import {
  TuiDataListModule,
  TuiDialogContext,
  TuiLoaderModule,
} from "@taiga-ui/core";
import { TaskService } from "../../services/task.service";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CategoryService } from "../../../category/services/category.service";
import { TUI_DATE_SEPARATOR, TuiDay } from "@taiga-ui/cdk";
import {
  TuiDataListWrapperModule,
  TuiInputDateModule,
  TuiInputModule,
  TuiMultiSelectModule,
  TuiSelectModule,
  TuiTextareaModule,
} from "@taiga-ui/kit";
import { TuiButtonModule, TuiChipModule } from "@taiga-ui/experimental";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { ReplaceStringPipe } from "../../../../shared/pipes/replace-string.pipe";
import { CreateTask, TaskPriority, TaskStatus } from "../../interfaces/task";
import { Category } from "../../../category/interfaces/category";

@Component({
  selector: "save-task-dialog",
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TuiInputModule,
    TuiInputDateModule,
    TuiTextareaModule,
    TuiSelectModule,
    TuiDataListWrapperModule,
    TuiMultiSelectModule,
    NgIf,
    TuiButtonModule,
    AsyncPipe,
    TuiLoaderModule,
    TuiDataListModule,
    NgFor,
    ReplaceStringPipe,
    TuiChipModule,
    NgStyle,
    NgTemplateOutlet,
  ],
  templateUrl: "./save-task-dialog.component.html",
  styleUrl: "./save-task-dialog.component.scss",
  providers: [{ provide: TUI_DATE_SEPARATOR, useValue: "/" }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SaveTaskDialogComponent implements OnInit {
  private readonly taskService = inject(TaskService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly categoryService = inject(CategoryService);
  private readonly dialogContext =
    inject<
      TuiDialogContext<
        void,
        { taskId?: number; initialTaskStatus?: TaskStatus }
      >
    >(POLYMORPHEUS_CONTEXT);

  public readonly statusItems: TaskStatus[] = [
    "PENDING",
    "IN_PROGRESS",
    "DONE",
  ];
  public readonly priorityItems: TaskPriority[] = ["LOW", "MEDIUM", "HIGH"];

  public readonly taskForm = this.formBuilder.group({
    id: [null as number | null],
    title: ["", Validators.required],
    description: ["", Validators.required],
    dueDate: [null as TuiDay | null, Validators.required],
    status: [null as TaskStatus | null, Validators.required],
    priority: [null as TaskPriority | null, Validators.required],
    categoryIds: [[] as number[]],
  });

  public readonly taskId$ = new BehaviorSubject<number | null>(
    this.dialogContext.data.taskId ?? null,
  );

  private readonly categories$ = this.categoryService.categories$.pipe(
    catchError(() => of([])),
  );

  public readonly selectedTask$ = this.taskId$.pipe(
    filter((taskId): taskId is number => taskId !== null),
    switchMap((taskId) =>
      this.taskService.getTaskById(taskId).pipe(
        catchError(() => {
          this.dialogContext.completeWith();
          return EMPTY;
        }),
      ),
    ),
    tap((task) => {
      const [year, month, day] = task.dueDate.split("-").map(Number);
      const dueDate = new TuiDay(year, month - 1, day);

      this.taskForm.patchValue({
        ...task,
        categoryIds: task.categories.map(({ id }) => id),
        dueDate,
      });
    }),
  );

  public isLoadingTask$ = combineLatest([
    this.selectedTask$.pipe(startWith(null)),
    this.taskId$,
  ]).pipe(map(([selectedTask, taskId]) => Boolean(taskId && !selectedTask)));

  public readonly savingTask$ = this.taskService.status$.pipe(
    map((status) => status === "CREATING" || status === "UPDATING"),
  );

  public readonly categoryIdItems$ = this.categories$.pipe(
    map((categories) => categories.map(({ id }) => id)),
  );

  public readonly mappedCategories$ = this.categories$.pipe(
    map(
      (categories) =>
        new Map(
          categories.map<[number, Pick<Category, "color" | "name">]>(
            ({ id, ...categoryContent }) => [id, categoryContent],
          ),
        ),
    ),
    startWith(new Map()),
    share(),
  );

  public readonly vm$ = combineLatest({
    categoryIdItems: this.categoryIdItems$.pipe(startWith(null)),
    mappedCategories: this.mappedCategories$,
    savingTask: this.savingTask$,
    isLoadingTask: this.isLoadingTask$,
    taskId: this.taskId$,
  });

  constructor() {
    merge(this.taskService.taskUpdated$, this.taskService.taskAdded$)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.dialogContext.completeWith());
  }

  ngOnInit(): void {
    const { initialTaskStatus } = this.dialogContext.data;
    if (initialTaskStatus) {
      this.taskForm.patchValue({ status: initialTaskStatus });
    }
  }

  public saveTask() {
    const taskId = this.taskForm.value.id;

    if (taskId) {
      this.taskService.updateTask({
        taskId,
        task: this.taskForm.value as CreateTask,
      });
    } else {
      this.taskService.addTask(this.taskForm.value as CreateTask);
    }
  }

  public closeDialog() {
    this.dialogContext.completeWith();
  }
}
