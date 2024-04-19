import { Injectable, inject } from "@angular/core";
import { throwError } from "rxjs";
import { ApiValidationResponse } from "../interfaces/api-validation-response.interface";
import { ApiDefaultResponse } from "../interfaces/api-default-response.interface";
import { HttpErrorResponse } from "@angular/common/http";
import { NotificationService } from "./notification.service";

@Injectable({
  providedIn: "root",
})
export class HttpErrorService {
  private readonly notificationService = inject(NotificationService);

  public handleError({ error }: HttpErrorResponse, message: string) {
    const errorDetail =
      (error as ApiDefaultResponse).detail ||
      (error as ApiValidationResponse).fieldErrors?.join(", ") ||
      "";

    this.notificationService.openNotification({
      status: "error",
      label: message,
      content: errorDetail,
    });

    return throwError(() => message);
  }
}
