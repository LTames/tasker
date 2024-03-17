import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, EMPTY, Subject, catchError, exhaustMap } from 'rxjs';
import { RegisterStatus } from '../types/register-status.type';
import { RegisterRequest } from '../interfaces/register-request.interface';
import { AuthService } from './auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<RegisterStatus>(
    'pending',
  );
  public readonly status$ = this.statusSubject.asObservable();

  private readonly errorSubject = new Subject<string>();
  public readonly error$ = this.errorSubject.asObservable();

  private readonly registerSubject = new Subject<RegisterRequest>();
  public readonly registerAction$ = this.registerSubject.asObservable();

  private readonly register$ = this.registerAction$.pipe(
    exhaustMap((registerDetails) =>
      this.authService.registerUser(registerDetails).pipe(
        catchError((err) => {
          this.errorSubject.next(err);
          return EMPTY;
        }),
      ),
    ),
  );

  constructor() {
    this.register$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('success'));

    this.registerAction$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('creating'));

    this.error$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('error'));
  }

  public register(registerDetails: RegisterRequest) {
    this.registerSubject.next(registerDetails);
  }
}
