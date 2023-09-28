import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { Task2Component } from './components/task2/task2.component';
import { Task3Component } from './components/task3/task3.component';
import { Task4Component } from './components/task4/task4.component';
import { HeaderComponent } from './components/header/header.component';
import { GcardComponent } from './components/gcard/gcard.component';
import { RouterOutlet } from '@angular/router';
import { SportsComponent } from './forms/sports/sports.component';
import { GroceryComponent } from "./forms/grocery/grocery.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [
        CommonModule,
        CardComponent,
        Task2Component,
        Task3Component,
        Task4Component,
        HeaderComponent,
        GcardComponent,
        SportsComponent,
        RouterOutlet,
        GroceryComponent
    ]
})
export class AppComponent {
  title = 'angularBasics';

  cardsTitle: string[] = ['Steve', 'Dylan', 'Minoru', 'Amarachi', 'Wanda'];

  writeEvent(title: string) {
    this.cardsTitle.push(title);
    console.log('test:', title);
  }

  deleteUser(username: string) {
    let index = this.cardsTitle.indexOf(username);
    this.cardsTitle.splice(index, 1);
  }
}
