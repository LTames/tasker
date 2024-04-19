import { ChangeDetectionStrategy, Component, inject } from "@angular/core";
import { RegisterFormComponent } from "../../components/register-form/register-form.component";
import { CredentialsFormWrapperComponent } from "../../components/credentials-form-wrapper/credentials-form-wrapper.component";
import { RegisterService } from "../../services/register.service";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { Router } from "@angular/router";
import { RegisterRequest } from "../../interfaces/auth";

@Component({
  selector: "register-page",
  standalone: true,
  imports: [RegisterFormComponent, CredentialsFormWrapperComponent],
  templateUrl: "./register-page.component.html",
  styleUrl: "./register-page.component.scss",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private readonly registerService = inject(RegisterService);
  private readonly router = inject(Router);

  constructor() {
    this.registerService.register$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.router.navigate(["/"]));
  }

  public handleRegister(registerDetails: RegisterRequest) {
    this.registerService.register(registerDetails);
  }
}
