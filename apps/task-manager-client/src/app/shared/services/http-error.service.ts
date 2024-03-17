import { Injectable, inject } from '@angular/core';
import { TuiAlertService } from '@taiga-ui/core';
import { throwError } from 'rxjs';
import { HttpError } from '../interfaces/http-error.interface';

@Injectable({
  providedIn: 'root',
})
export class HttpErrorService {
  private readonly alertService = inject(TuiAlertService);

  constructor() {}

  public handleError({ error, message }: HttpError) {
    const errorDetail = error.detail || error.fieldErrors?.join(', ') || '';

    // auto completes
    this.alertService
      .open(errorDetail, {
        status: 'error',
        autoClose: 3000,
        label: message,
      })
      .subscribe();

    return throwError(() => message);
  }
}
