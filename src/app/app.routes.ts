import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'instructions',
    loadComponent: () =>
      import('./pages/instructions/instructions.component').then(
        (c) => c.InstructionsComponent
      ),
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./pages/categories/categories.component').then(
        (c) => c.CategoriesComponent
      ),
  },
  {
    path: 'game/:category',
    loadComponent: () =>
      import('./pages/game/game.component').then((c) => c.GameComponent),
  },
];
