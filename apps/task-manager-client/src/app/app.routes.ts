import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { noAuthGuard } from './core/guards/no-auth.guard';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks',
      },
      {
        path: 'tasks',
        canMatch: [authGuard],
        loadChildren: () =>
          import('./features/task/task.routes').then((r) => r.TASK_ROUTES),
      },
    ],
    loadComponent: () =>
      import('./core/components/main-layout/main-layout.component').then(
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
      import('./core/components/not-found/not-found.component').then(
        (c) => c.NotFoundComponent,
      ),
  },
  { path: '**', redirectTo: 'not-found' },
];
