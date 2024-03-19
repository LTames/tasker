import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';
import { noAuthGuard } from './shared/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        canMatch: [authGuard],
        loadComponent: () =>
          import('./features/home/pages/home-page/home-page.component').then(
            (c) => c.HomePageComponent,
          ),
      },
      {
        path: 'tasks',
        canMatch: [authGuard],
        loadChildren: () =>
          import('./features/task/task.routes').then((r) => r.TASK_ROUTES),
      },
    ],
    loadComponent: () =>
      import('./shared/components/main-layout/main-layout.component').then(
        (c) => c.MainLayoutComponent,
      ),
  },
  {
    path: 'auth',
    canMatch: [noAuthGuard],
    loadChildren: () =>
      import('./features/auth/auth.routes').then((r) => r.AUTH_ROUTES),
  },
  {
    path: 'not-found',
    loadComponent: () =>
      import(
        './features/error-pages/pages/not-found-page/not-found-page.component'
      ).then((c) => c.NotFoundPageComponent),
  },
  { path: '**', redirectTo: 'not-found' },
];
