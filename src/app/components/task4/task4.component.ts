import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from "../../pipes/reverse.pipe";

@Component({
    selector: 'app-task4',
    standalone: true,
    templateUrl: './task4.component.html',
    styleUrls: ['./task4.component.scss'],
    imports: [CommonModule, MatCardModule, MatButtonModule, ReversePipe]
})
export class Task4Component {

  birthday = new Date(1988, 3, 15);

  salary: number = 10000; 

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
