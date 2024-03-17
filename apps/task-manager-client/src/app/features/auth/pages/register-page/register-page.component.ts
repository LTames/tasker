import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RegisterFormComponent } from '../../components/register-form/register-form.component';
import { CredentialsFormWrapperComponent } from '../../components/credentials-form-wrapper/credentials-form-wrapper.component';
import { RegisterRequest } from '../../interfaces/register-request.interface';
import { RegisterService } from '../../services/register.service';
import { AuthService } from '../../services/auth.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'register-page',
  standalone: true,
  imports: [RegisterFormComponent, CredentialsFormWrapperComponent],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPageComponent {
  private readonly registerService = inject(RegisterService);
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  constructor() {
    this.authService.user$.pipe(takeUntilDestroyed()).subscribe((user) => {
      if (!user) return;
      this.router.navigate(['/tasks']);
    });
  }

  public handleRegister(registerDetails: RegisterRequest) {
    this.registerService.register(registerDetails);
  }
}
