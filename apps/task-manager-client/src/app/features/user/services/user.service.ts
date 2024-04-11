import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { environment } from "../../../../environments/environment";
import { UserResponse } from "../interfaces/user-response.interface";
import { catchError } from "rxjs";
import { HttpErrorService } from "../../../shared/services/http-error.service";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private readonly http = inject(HttpClient);
  private readonly errorService = inject(HttpErrorService);

  constructor() {}

  public getUser() {
    return this.http.get<UserResponse>(`${environment.apiUrl}/users/me`).pipe(
      catchError((err: HttpErrorResponse) => {
        return this.errorService.handleError(
          err,
          "An error occured while retrieving user data",
        );
      }),
    );
  }
}
