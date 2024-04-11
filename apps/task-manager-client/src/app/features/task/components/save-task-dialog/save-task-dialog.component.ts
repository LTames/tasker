import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from "@angular/core";
import {
  BehaviorSubject,
  EMPTY,
  Observable,
  Subject,
  catchError,
  combineLatest,
  filter,
  map,
  merge,
  shareReplay,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { AsyncPipe, NgFor, NgIf } from "@angular/common";
import { POLYMORPHEUS_CONTEXT } from "@tinkoff/ng-polymorpheus";
import {
  TuiDataListModule,
  TuiDialogContext,
  TuiLoaderModule,
} from "@taiga-ui/core";
import { TaskService } from "../../services/task.service";
import { TaskRequest } from "../../interfaces/task-request.interface";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { CategoryService } from "../../../category/services/category.service";
import {
  TUI_DATE_SEPARATOR,
  TuiContextWithImplicit,
  TuiDay,
  TuiHandler,
  tuiIsNumber,
} from "@taiga-ui/cdk";
import { TaskStatus } from "../../interfaces/task-status.type";
import { TaskPriority } from "../../interfaces/task-priority.type";
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

  private readonly categories$ = this.categoryService.categoryState$.pipe(
    shareReplay(1),
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
    map((status) => status === "creating" || status === "updating"),
  );

  private readonly search$ = new Subject<string>();
  public readonly categoryIdItems$ = combineLatest([
    this.categories$,
    this.search$.pipe(startWith("")),
  ]).pipe(
    map(([categories, search]) =>
      categories
        .filter(({ name }) => name.includes(search))
        .map(({ id }) => id),
    ),
  );

  public readonly categoryStringify$: Observable<
    TuiHandler<TuiContextWithImplicit<number> | number, string>
  > = this.categories$.pipe(
    map(
      (categories) =>
        new Map(categories.map<[number, string]>(({ id, name }) => [id, name])),
    ),
    startWith(new Map()),
    map(
      (categoriesMap) => (id: TuiContextWithImplicit<number> | number) =>
        tuiIsNumber(id)
          ? categoriesMap.get(id)
          : categoriesMap.get(id.$implicit),
    ),
  );

  public readonly vm$ = combineLatest([
    this.categoryIdItems$.pipe(startWith(null)),
    this.categoryStringify$.pipe(startWith(null)),
    this.savingTask$,
    this.isLoadingTask$,
    this.taskId$,
  ]).pipe(
    map(
      ([
        categoryIdItems,
        categoryStringify,
        savingTask,
        isLoadingTask,
        taskId,
      ]) => ({
        categoryIdItems,
        categoryStringify,
        savingTask,
        isLoadingTask,
        taskId,
      }),
    ),
  );

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

  public onCategorySearch(search: string | null) {
    this.search$.next(search ?? "");
  }

  public saveTask() {
    const taskId = this.taskForm.value.id;

    if (taskId) {
      this.taskService.updateTask({
        taskId,
        task: this.taskForm.value as TaskRequest,
      });
    } else {
      this.taskService.addTask(this.taskForm.value as TaskRequest);
    }
  }

  public closeDialog() {
    this.dialogContext.completeWith();
  }
}
