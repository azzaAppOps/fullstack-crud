import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'crud',
    loadComponent: () =>
      import('./pages/application/container-items/items.component').then(
        (com) => com.ItemsComponent,
      ),
  },
];
