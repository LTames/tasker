import { Injectable, inject } from '@angular/core';
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  exhaustMap,
  tap,
} from 'rxjs';
import { RegisterStatus } from '../types/register-status.type';
import { RegisterRequest } from '../interfaces/register-request.interface';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<RegisterStatus>(
    'pending',
  );
  public readonly status$ = this.statusSubject.asObservable();

  private readonly registerSubject = new Subject<RegisterRequest>();
  public readonly registerAction$ = this.registerSubject.asObservable();

  public readonly register$ = this.registerAction$.pipe(
    exhaustMap((registerDetails) =>
      this.authService.registerUser(registerDetails).pipe(
        catchError(() => {
          this.statusSubject.next('error');
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.statusSubject.next('success')),
  );

  public register(registerDetails: RegisterRequest) {
    this.statusSubject.next('creating');
    this.registerSubject.next(registerDetails);
  }
}
