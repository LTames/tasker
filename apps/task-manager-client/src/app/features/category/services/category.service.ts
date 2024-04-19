import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  concatMap,
  merge,
  share,
  startWith,
  switchMap,
  tap,
} from "rxjs";
import { CategoryRequest, CategoryResponse } from "../interfaces/category";
import { HttpErrorService } from "../../../shared/services/http-error.service";
import { NotificationService } from "../../../shared/services/notification.service";

interface UpdateCategory {
  categoryId: number;
  category: CategoryRequest;
}

type CategoryOperationStatus =
  | "pending"
  | "loading"
  | "deleting"
  | "creating"
  | "updating"
  | "success"
  | "error";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(HttpErrorService);
  private readonly notificationService = inject(NotificationService);

  public readonly categoryState$ = this.http.get<CategoryResponse[]>(
    `${environment.apiUrl}/categories`,
  );

  private readonly categoryStatusSubject =
    new BehaviorSubject<CategoryOperationStatus>("pending");
  public readonly categoryStatus$ = this.categoryStatusSubject.asObservable();

  private readonly addCategoryAction$ = new Subject<CategoryRequest>();
  private readonly deleteCategoryByIdAction$ = new Subject<number>();
  private readonly updateCategoryAction$ = new Subject<UpdateCategory>();

  public readonly categoryAdded$ = this.addCategoryAction$.pipe(
    tap(() => this.categoryStatusSubject.next("creating")),
    concatMap((newCategory) =>
      this.http.post(`${environment.apiUrl}/categories`, newCategory).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            "An error occurred while trying to save a new category",
          );
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
    tap(() => this.categoryStatusSubject.next("deleting")),
    concatMap((categoryId) =>
      this.http.delete(`${environment.apiUrl}/categories/${categoryId}`).pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorService.handleError(
            err,
            `An error occurred while trying to delete category with id: ${categoryId}`,
          );
          return EMPTY;
        }),
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
    tap(() => this.categoryStatusSubject.next("updating")),
    concatMap(({ category, categoryId }) =>
      this.http
        .put(`${environment.apiUrl}/categories/${categoryId}`, category)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              `An error occurred while trying to update category with id: ${categoryId}`,
            );
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
    this.addCategoryAction$,
    this.deleteCategoryByIdAction$,
    this.updateCategoryAction$,
  ).pipe(tap(() => this.categoryStatusSubject.next("success")));

  public readonly categories$ = this.categoryEvents$.pipe(
    startWith(null),
    tap(() => this.categoryStatusSubject.next("loading")),
    switchMap(() =>
      this.http
        .get<CategoryResponse[]>(`${environment.apiUrl}/categories`)
        .pipe(
          catchError((err: HttpErrorResponse) => {
            this.errorService.handleError(
              err,
              "An error occurred while trying to get your categories",
            );
            return EMPTY;
          }),
        ),
    ),
    tap(() => this.categoryStatusSubject.next("success")),
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

  public createCategory(newCategory: CategoryRequest) {
    this.addCategoryAction$.next(newCategory);
  }
}
