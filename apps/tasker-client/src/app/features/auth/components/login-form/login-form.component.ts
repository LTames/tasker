import { AsyncPipe, NgIf } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from "@angular/core";
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";
import { TuiInputModule, TuiInputPasswordModule } from "@taiga-ui/kit";
import { TuiButtonModule } from "@taiga-ui/experimental";
import { TuiLinkModule } from "@taiga-ui/core";
import { LoginService } from "../../services/login.service";
import { LoginRequest } from "../../interfaces/auth";

@Component({
  selector: "login-form",
  standalone: true,
  imports: [
    TuiInputModule,
    TuiInputPasswordModule,
    RouterLink,
    ReactiveFormsModule,
    AsyncPipe,
    TuiButtonModule,
    NgIf,
    TuiLinkModule,
  ],
  templateUrl: "./login-form.component.html",
  styleUrl: "./login-form.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly loginService = inject(LoginService);

  @Output()
  public readonly login = new EventEmitter<LoginRequest>();

  public readonly loginStatus$ = this.loginService.status$;

  public readonly loginForm = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor() {}

  public submitForm() {
    if (this.loginForm.invalid) return;

    this.login.emit(this.loginForm.value as LoginRequest);
  }
}
