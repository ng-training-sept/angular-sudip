import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from "./components/card/card.component";
import { Task2Component } from "./components/task2/task2.component";
import { Task3Component } from "./components/task3/task3.component";
import { Task4Component } from "./components/task4/task4.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CardComponent, Task2Component, Task3Component, Task4Component]
})
export class AppComponent {
  title = 'angularBasics';

  cardsTitle: string[] = ['Steve', 'Dylan', 'Minoru', 'Amarachi', 'Wanda'];

  writeEvent(title: string){
    this.cardsTitle.push(title);
    console.log("test:", title);
  }

  deleteUser(username: string){
    let index = this.cardsTitle.indexOf(username);
    this.cardsTitle.splice(index, 1);
  }

}
