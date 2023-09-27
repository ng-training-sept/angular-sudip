import { Routes } from "@angular/router";
import { GroceryComponent } from "./grocery.component";
import { CardItemComponent } from "src/app/components/gcard/card-item/card-item.component";



// this Routes can be defined in app.config.ts as well

export const routes: Routes = [
    // { path: '', redirectTo: 'sports', pathMatch: 'full' },
    { path: 'grocery', component: GroceryComponent },
    { path: 'card-item/:id', component: CardItemComponent}
  ];