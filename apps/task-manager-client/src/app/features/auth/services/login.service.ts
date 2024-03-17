import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import { BehaviorSubject, EMPTY, Subject, catchError, exhaustMap } from 'rxjs';
import { LoginRequest } from '../interfaces/login-request.interface';
import { LoginStatus } from '../types/login-status.type';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<LoginStatus>('pending');
  public readonly status$ = this.statusSubject.asObservable();

  private readonly errorSubject = new Subject<string>();
  public readonly error$ = this.errorSubject.asObservable();

  private readonly loginSubject = new Subject<LoginRequest>();
  public readonly loginAction$ = this.loginSubject.asObservable();

  private readonly login$ = this.loginAction$.pipe(
    exhaustMap((credentials) =>
      this.authService.loginUser(credentials).pipe(
        catchError((err) => {
          this.errorSubject.next(err);
          return EMPTY;
        }),
      ),
    ),
  );

  constructor() {
    this.login$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('success'));

    this.error$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('error'));

    this.loginAction$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.statusSubject.next('authenticating'));
  }

  public loginWithCredentials(credentials: LoginRequest) {
    this.loginSubject.next(credentials);
  }
}
