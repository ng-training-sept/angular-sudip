import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { Routes, provideRouter } from '@angular/router';
import { GroceryComponent } from './forms/grocery/grocery.component';
import { SportsComponent } from './forms/sports/sports.component';


export const routes: Routes = [
  { path: 'grocery', component: GroceryComponent },
  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) }
  ];




export const appConfig: ApplicationConfig = {
  providers: [provideAnimations(), provideRouter(routes)]
};
