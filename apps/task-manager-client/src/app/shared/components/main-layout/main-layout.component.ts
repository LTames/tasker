import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import {
  TuiDataListModule,
  TuiExpandModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import {
  TuiButtonModule,
  TuiIconModule,
  TuiNavigationModule,
} from '@taiga-ui/experimental';
import { TuiAvatarModule, TuiTabsModule } from '@taiga-ui/kit';
import { AuthService } from '../../../features/auth/services/auth.service';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'main-layout',
  standalone: true,
  imports: [
    TuiNavigationModule,
    TuiButtonModule,
    RouterLink,
    RouterLinkActive,
    TuiAvatarModule,
    TuiDataListModule,
    TuiHostedDropdownModule,
    TuiSvgModule,
    RouterOutlet,
    TuiExpandModule,
    TuiIconModule,
    TuiTabsModule,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);

  public readonly user$ = this.authService.user$;
  public expanded = false;

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
}
