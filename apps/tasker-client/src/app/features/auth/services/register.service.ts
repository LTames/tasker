import { Injectable, inject } from "@angular/core";
import {
  BehaviorSubject,
  EMPTY,
  Subject,
  catchError,
  exhaustMap,
  tap,
} from "rxjs";
import { AuthService } from "./auth.service";
import { RegisterRequest, RegisterStatus } from "../interfaces/auth";

@Injectable({
  providedIn: "root",
})
export class RegisterService {
  private readonly authService = inject(AuthService);

  private readonly statusSubject = new BehaviorSubject<RegisterStatus>(
    "PENDING",
  );
  public readonly status$ = this.statusSubject.asObservable();

  private readonly registerSubject = new Subject<RegisterRequest>();
  public readonly registerAction$ = this.registerSubject.asObservable();

  public readonly register$ = this.registerAction$.pipe(
    tap(() => this.statusSubject.next("CREATING")),
    exhaustMap((registerDetails) =>
      this.authService.registerUser(registerDetails).pipe(
        catchError(() => {
          this.statusSubject.next("ERROR");
          return EMPTY;
        }),
      ),
    ),
    tap(() => this.statusSubject.next("SUCCESS")),
  );

  public register(registerDetails: RegisterRequest) {
    this.registerSubject.next(registerDetails);
  }
}
