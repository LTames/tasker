import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { LoginService } from "../../services/login.service";
import { CredentialsFormWrapperComponent } from "../../components/credentials-form-wrapper/credentials-form-wrapper.component";
import { LoginFormComponent } from "../../components/login-form/login-form.component";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { LoginRequest } from "../../interfaces/auth";

@Component({
  selector: "login-page",
  standalone: true,
  imports: [RouterLink, CredentialsFormWrapperComponent, LoginFormComponent],
  templateUrl: "./login-page.component.html",
  styleUrl: "./login-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly loginService = inject(LoginService);
  private readonly router = inject(Router);

  constructor() {
    this.loginService.login$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.router.navigate(["/"]));
  }

  public handleLogin(credentials: LoginRequest) {
    this.loginService.loginWithCredentials(credentials);
  }
}
