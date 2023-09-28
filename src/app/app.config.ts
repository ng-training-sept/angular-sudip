import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { authGuard } from './service/auth/auth.constants';
// import { SportsComponent } from './forms/sports/sports.component';
// import { CardItemComponent } from './components/gcard/card-item/card-item.component';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./forms/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./forms/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'grocery',
    canActivate: [authGuard],     // guard is working because of this, there are multiple guards...
    component: GroceryComponent,
  },
  {
    path: 'grocery',
    canActivate: [authGuard],
    loadChildren: () =>
      import('./forms/grocery/grocery.routes').then((m) => m.routes),
  },
  {
    path: 'sports',
    loadComponent: () =>
      import('./forms/sports/sports.component').then((m) => m.SportsComponent),
  },
  {
    path: 'sports',
    loadChildren: () =>
      import('./forms/sports/sports.routes').then((m) => m.routes),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./forms/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes)],
};
