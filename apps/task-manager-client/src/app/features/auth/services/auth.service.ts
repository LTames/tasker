import { Injectable, inject } from '@angular/core';
import { RegisterRequest } from '../interfaces/register-request.interface';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { AuthResponse } from '../interfaces/auth-response.interface';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { LoginRequest } from '../interfaces/login-request.interface';
import { UserResponse } from '../../user/interfaces/user-response.interface';
import { UserService } from '../../user/services/user.service';
import { HttpErrorService } from '../../../shared/services/http-error.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly http = inject(HttpClient);
  private readonly userService = inject(UserService);
  private readonly errorService = inject(HttpErrorService);

  private readonly userSource = new BehaviorSubject<UserResponse | null>(null);
  public readonly user$ = this.userSource.asObservable();

  public readonly isLoggedIn$ = this.user$.pipe(
    take(1),
    switchMap((user) => {
      if (!this.token) return of(false);
      if (user) return of(true);

      return this.getUser().pipe(
        map((user) => Boolean(user)),
        catchError(() => {
          this.logout();
          return of(false);
        }),
      );
    }),
  );

  get token() {
    return localStorage.getItem('token');
  }

  set token(token: string | null) {
    if (token !== null) {
      localStorage.setItem('token', token);
      return;
    }

    localStorage.removeItem('token');
  }

  public registerUser(
    registerRequest: RegisterRequest,
  ): Observable<UserResponse> {
    return this.http
      .post<AuthResponse>(
        `${environment.apiUrl}/auth/register`,
        registerRequest,
      )
      .pipe(
        tap(({ token }) => (this.token = token)),
        switchMap(() => this.getUser()),
        catchError((error: HttpErrorResponse) =>
          this.errorService.handleError({
            error,
            message: 'An error occurred during register',
          }),
        ),
      );
  }

  public loginUser(loginRequest: LoginRequest): Observable<UserResponse> {
    return this.http
      .post<AuthResponse>(`${environment.apiUrl}/auth/login`, loginRequest)
      .pipe(
        tap(({ token }) => (this.token = token)),
        switchMap(() => this.getUser()),
        catchError(({ error }: HttpErrorResponse) => {
          return this.errorService.handleError({
            error,
            message: 'An error occurred during login',
          });
        }),
      );
  }

  public logout(): void {
    this.token = null;
    this.userSource.next(null);
  }

  private getUser(): Observable<UserResponse> {
    return this.userService
      .getUser()
      .pipe(tap((user) => this.userSource.next(user)));
  }
}
