import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import {
  TuiDataListModule,
  TuiHostedDropdownModule,
  TuiSvgModule,
} from '@taiga-ui/core';
import { TuiButtonModule, TuiNavigationModule } from '@taiga-ui/experimental';
import { TuiAvatarModule } from '@taiga-ui/kit';

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
  ],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {
  public expanded = false;

  constructor() {}

  public toggleExpanded() {
    this.expanded = !this.expanded;
  }

  public logout() {
    return;
  }
}
