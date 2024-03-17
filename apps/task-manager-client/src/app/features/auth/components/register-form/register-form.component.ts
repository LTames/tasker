import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject,
} from '@angular/core';
import { RegisterRequest } from '../../interfaces/register-request.interface';
import { TuiButtonModule } from '@taiga-ui/experimental';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { TuiLinkModule } from '@taiga-ui/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe, NgIf } from '@angular/common';
import { TuiInputPasswordModule, TuiInputModule } from '@taiga-ui/kit';

@Component({
  selector: 'register-form',
  standalone: true,
  imports: [
    TuiButtonModule,
    ReactiveFormsModule,
    TuiLinkModule,
    RouterLink,
    AsyncPipe,
    NgIf,
    TuiInputPasswordModule,
    TuiInputModule,
  ],
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterFormComponent {
  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly registerService = inject(RegisterService);

  @Output()
  private readonly register = new EventEmitter<RegisterRequest>();

  public readonly registerStatus$ = this.registerService.status$;

  public readonly registerForm = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  public submitRegisterForm() {
    this.register.emit(this.registerForm.value as RegisterRequest);
  }
}
