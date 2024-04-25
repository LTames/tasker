import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
} from "@angular/core";
import { CategoryTableComponent } from "../../components/category-table/category-table.component";
import { CreateCategoryFormComponent } from "../../components/create-category-form/create-category-form.component";
import { TuiCardModule } from "@taiga-ui/experimental";
import { AsyncPipe } from "@angular/common";
import { CategoryService } from "../../services/category.service";
import {
  Subject,
  catchError,
  combineLatest,
  map,
  merge,
  of,
  startWith,
  withLatestFrom,
} from "rxjs";
import { Category, CreateCategory } from "../../interfaces/category";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: "category-list-page",
  standalone: true,
  imports: [
    CategoryTableComponent,
    CreateCategoryFormComponent,
    TuiCardModule,
    AsyncPipe,
    CreateCategoryFormComponent,
  ],
  templateUrl: "./category-list-page.component.html",
  styleUrl: "./category-list-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryListPageComponent {
  @ViewChild("categoryForm") formComponent!: CreateCategoryFormComponent;

  private readonly categoryService = inject(CategoryService);
  private readonly submitAction$ = new Subject<CreateCategory>();

  public readonly vm$ = combineLatest({
    selectedCategory: this.categoryService.selectedCategory$,
    categoryStatus: this.categoryService.categoryStatus$,
    categories: this.categoryService.categories$.pipe(
      catchError(() => of([])),
      startWith(null),
    ),
    savingCategory: this.categoryService.categoryStatus$.pipe(
      map((status) => status === "CREATING" || status === "UPDATING"),
    ),
  });

  constructor() {
    this.submitAction$
      .pipe(
        withLatestFrom(this.categoryService.selectedCategory$),
        takeUntilDestroyed(),
      )
      .subscribe(([category, selectedCategory]) => {
        if (selectedCategory) {
          this.categoryService.updateCategory({
            category,
            categoryId: selectedCategory.id,
          });
          return;
        }

        this.categoryService.createCategory(category);
      });

    combineLatest([
      this.categoryService.selectedCategory$,
      this.categoryService.categoryDeleted$,
    ])
      .pipe(takeUntilDestroyed())
      .subscribe(([selectedCategory, deletedCategoryId]) => {
        if (selectedCategory?.id === deletedCategoryId) {
          this.resetSelectionAndFormState();
        }
      });

    merge(
      this.categoryService.categoryAdded$,
      this.categoryService.categoryUpdated$,
    )
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.resetSelectionAndFormState());
  }

  public handleCategorySubmit(category: CreateCategory) {
    this.submitAction$.next(category);
  }

  public handleFormCancel() {
    this.resetSelectionAndFormState();
  }

  public handleCategoryDelete(category: Category) {
    this.categoryService.deleteCategory(category.id);
  }

  public handleCategorySelect(selectedCategory: Category) {
    this.categoryService.setSelectedCategory(selectedCategory);
  }

  private resetSelectionAndFormState() {
    this.categoryService.setSelectedCategory(null);
    this.formComponent.categoryForm.reset({ color: "#000000" });
  }
}
