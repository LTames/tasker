import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginRequest } from '../../interfaces/login-request.interface';
import { LoginService } from '../../services/login.service';
import { CredentialsFormWrapperComponent } from '../../components/credentials-form-wrapper/credentials-form-wrapper.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'login-page',
  standalone: true,
  imports: [RouterLink, CredentialsFormWrapperComponent, LoginFormComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPageComponent {
  private readonly loginService = inject(LoginService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    this.authService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (!user) return;
      this.router.navigate(['/']);
    });
  }

  public handleLogin(credentials: LoginRequest) {
    this.loginService.loginWithCredentials(credentials);
  }
}
