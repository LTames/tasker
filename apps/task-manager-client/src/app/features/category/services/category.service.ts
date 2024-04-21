import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  concatMap,
  map,
  merge,
  share,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { HttpErrorService } from "../../../shared/services/http-error.service";
import { NotificationService } from "../../../shared/services/notification.service";
import {
  Category,
  CategoryOperationStatus,
  CreateCategory,
  UpdateCategory,
} from "../interfaces/category";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(HttpErrorService);
  private readonly notificationService = inject(NotificationService);

  private readonly selectedCategorySource =
    new BehaviorSubject<Category | null>(null);
  public readonly selectedCategory$ =
    this.selectedCategorySource.asObservable();

  private readonly categoryStatusSubject =
    new BehaviorSubject<CategoryOperationStatus>("PENDING");
  public readonly categoryStatus$ = this.categoryStatusSubject.asObservable();

  private readonly addCategoryAction$ = new Subject<CreateCategory>();
  private readonly deleteCategoryByIdAction$ = new Subject<number>();
  private readonly updateCategoryAction$ = new Subject<UpdateCategory>();

  public readonly categoryAdded$ = this.addCategoryAction$.pipe(
    tap(() => this.categoryStatusSubject.next("CREATING")),
    concatMap((newCategory) =>
      this.http
        .post<Category>(`${environment.apiUrl}/categories`, newCategory)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              "An error occurred while trying to save a new category",
            );
            this.categoryStatusSubject.next("ERROR");
            return EMPTY;
          }),
        ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        label: "Category created successfully",
        status: "success",
      }),
    ),
    share(),
  );

  public readonly categoryDeleted$ = this.deleteCategoryByIdAction$.pipe(
    tap(() => this.categoryStatusSubject.next("DELETING")),
    concatMap((categoryId) =>
      this.http
        .delete<void>(`${environment.apiUrl}/categories/${categoryId}`)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              `An error occurred while trying to delete category with id: ${categoryId}`,
            );
            this.categoryStatusSubject.next("ERROR");
            return EMPTY;
          }),
          map(() => categoryId),
        ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        label: "Category deleted successfully",
        status: "success",
      }),
    ),
    share(),
  );

  public readonly categoryUpdated$ = this.updateCategoryAction$.pipe(
    tap(() => this.categoryStatusSubject.next("UPDATING")),
    concatMap(({ category, categoryId }) =>
      this.http
        .put<Category>(
          `${environment.apiUrl}/categories/${categoryId}`,
          category,
        )
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              `An error occurred while trying to update category with id: ${categoryId}`,
            );
            this.categoryStatusSubject.next("ERROR");
            return EMPTY;
          }),
        ),
    ),
    tap(() =>
      this.notificationService.openNotification({
        label: "Category updated successfully",
        status: "success",
      }),
    ),
    share(),
  );

  private readonly categoryEvents$ = merge(
    this.categoryAdded$,
    this.categoryDeleted$,
    this.categoryUpdated$,
  ).pipe(tap(() => this.categoryStatusSubject.next("SUCCESS")));

  public readonly categories$ = this.categoryEvents$.pipe(
    startWith(null),
    tap(() => this.categoryStatusSubject.next("LOADING")),
    switchMap(() =>
      this.http.get<Category[]>(`${environment.apiUrl}/categories`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occurred while trying to get your categories",
          );
          this.categoryStatusSubject.next("ERROR");
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.categoryStatusSubject.next("SUCCESS")),
    share(),
  );

  public getCategoryById(categoryId: number) {
    return this.http.get(`${environment.apiUrl}/categories/${categoryId}`).pipe(
      catchError((err: HttpErrorResponse) => {
        this.errorService.handleError(
          err,
          `An error occurred while trying to get category with id: ${categoryId}`,
        );
        return EMPTY;
      }),
    );
  }

  public updateCategory(updateCategory: UpdateCategory) {
    this.updateCategoryAction$.next(updateCategory);
  }

  public deleteCategory(categoryId: number) {
    this.deleteCategoryByIdAction$.next(categoryId);
  }

  public createCategory(newCategory: CreateCategory) {
    this.addCategoryAction$.next(newCategory);
  }

  public setSelectedCategory(category: Category | null) {
    this.selectedCategorySource.next(category);
  }
}
