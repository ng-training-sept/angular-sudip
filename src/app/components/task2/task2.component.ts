import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecialDirective } from 'src/app/directives/special.directive';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule, FormsModule, MatButtonModule, SpecialDirective],
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.scss']
})
export class Task2Component {
  message: { title: string, username: string; port: number; status: string } = {
    title: 'Enter Code to see car list',
    username: '',
    port: 4200,
    status: 'Working | All Good',
  };

  cars: string[] = ['Tesla', 'BYD', 'Tata'];


  size: string = '12 rem';
  style: string = 'font-size: 1.2rem; color: cornflowerblue;';

  inputFieldStyle: string = 'height: 10px; padding: 10px; margin: 0px 10px';
  buttonStyle: string = '';

  onClicks(): void {
    this.message.username = "";
  }
}
