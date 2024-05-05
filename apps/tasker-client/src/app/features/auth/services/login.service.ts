import { Injectable, inject } from "@angular/core";
import { AuthService } from "./auth.service";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  exhaustMap,
  tap,
} from "rxjs";
import { LoginRequest, LoginStatus } from "../interfaces/auth";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<LoginStatus>("PENDING");
  public readonly status$ = this.statusSubject.asObservable();

  private readonly loginSubject = new Subject<LoginRequest>();
  public readonly loginAction$ = this.loginSubject.asObservable();

  public readonly login$ = this.loginAction$.pipe(
    tap(() => this.statusSubject.next("AUTHENTICATING")),
    exhaustMap((credentials) =>
      this.authService.loginUser(credentials).pipe(
        catchError(() => {
          this.statusSubject.next("ERROR");
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.statusSubject.next("SUCCESS")),
  );

  public loginWithCredentials(credentials: LoginRequest) {
    this.loginSubject.next(credentials);
  }
}
