import { Injectable, inject } from '@angular/core';
import { AuthService } from './auth.service';
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  exhaustMap,
  tap,
} from 'rxjs';
import { LoginRequest } from '../interfaces/login-request.interface';
import { LoginStatus } from '../types/login-status.type';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<LoginStatus>('pending');
  public readonly status$ = this.statusSubject.asObservable();

  private readonly loginSubject = new Subject<LoginRequest>();
  public readonly loginAction$ = this.loginSubject.asObservable();

  public readonly login$ = this.loginAction$.pipe(
    exhaustMap((credentials) =>
      this.authService.loginUser(credentials).pipe(
        catchError(() => {
          this.statusSubject.next('error');
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.statusSubject.next('success')),
  );

  public loginWithCredentials(credentials: LoginRequest) {
    this.statusSubject.next('authenticating');
    this.loginSubject.next(credentials);
  }
}
