import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { CategoryResponse } from "../interfaces/category-response.interface";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  private readonly http = inject(HttpClient);

  public readonly categoryState$ = this.http.get<CategoryResponse[]>(
    `${environment.apiUrl}/categories`,
  );
}
