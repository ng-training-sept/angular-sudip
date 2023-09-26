import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component {

  inputFieldStyle: string = 'height: 10px; padding: 10px; margin: 0px 10px';

  // to recieve values from parent
  @Input({required: true}) titles: string[] = [];


  // to pass values to parent
  @Output() titleEvent$ = new EventEmitter<string>();

  detectInput(title: any): void {
    this.titleEvent$.emit(title);
    console.log(title);
  }

  // to pass values to parent to delete
  @Output() deleteEvent$ = new EventEmitter<string>();

  handleDelete(value: string): void{
    this.deleteEvent$.emit(value);
  }
}
