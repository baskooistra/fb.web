import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    children:
    [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./nx-welcome.component').then(
          (comp) => comp.NxWelcomeComponent)
      },
      {
        path: 'home',
        loadComponent: () => import('@fb/core').then(
          (core) => core.HomeComponent
        )
      }
    ]
  }
];
