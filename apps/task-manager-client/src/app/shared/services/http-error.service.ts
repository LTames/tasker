import { Injectable, inject } from "@angular/core";
import { TuiAlertService } from "@taiga-ui/core";
import { throwError } from "rxjs";
import { ApiValidationResponse } from "../interfaces/api-validation-response.interface";
import { ApiDefaultResponse } from "../interfaces/api-default-response.interface";
import { HttpErrorResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpErrorService {
  private readonly alertService = inject(TuiAlertService);

  public handleError({ error }: HttpErrorResponse, message: string) {
    const errorDetail =
      (error as ApiDefaultResponse).detail ||
      (error as ApiValidationResponse).fieldErrors?.join(", ") ||
      "";

    // auto completes
    this.alertService
      .open(errorDetail, {
        status: "error",
        label: message,
      })
      .subscribe();

    return throwError(() => message);
  }
}
