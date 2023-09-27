import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { SportsComponent } from './forms/sports/sports.component';
import { CardItemComponent } from './components/gcard/card-item/card-item.component';


export const routes: Routes = [
  { path: 'grocery', component: GroceryComponent },
  {path: 'grocery', loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)},
  // { path: 'card-item/:id', component: CardItemComponent},
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) },
  {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)}  
];


export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes)]
};
