import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./core/components/main-layout/main-layout.component').then(c => c.MainLayoutComponent),
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'tasks',
      },
      {
        path: 'tasks',
        loadChildren: () =>
          import('./features/task/task.routes').then((r) => r.TASK_ROUTES),
      },
    ],
  },
  {
    path: 'not-found',
    loadComponent: () => import('./core/components/not-found/not-found.component').then(c => c.NotFoundComponent),
  },
  { path: '**', redirectTo: 'not-found' },
];
