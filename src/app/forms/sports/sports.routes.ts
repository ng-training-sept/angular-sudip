import { Routes } from "@angular/router";
import { SportsComponent } from "./sports.component";
import { CardItemComponent } from "src/app/components/gcard/card-item/card-item.component";


// this Routes can be defined in app.config.ts as well

export const routes: Routes = [
    { path: '', redirectTo: 'sports', pathMatch: 'full' },
    { path: 'sports', component: SportsComponent },
    { path: 'card-item/:id', component: CardItemComponent}
  ];