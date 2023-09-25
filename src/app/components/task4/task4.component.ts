import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task4.component.html',
  styleUrls: ['./task4.component.scss']
})
export class Task4Component {
  // to recieve values from parent
  @Input({required: true}) titles: string[] = [];


  // to pass values to parent
  @Output() titleEvent$ = new EventEmitter<string>();

  onAddCard(title: any): void {
    this.titleEvent$.emit(title);
    console.log(title.key);
  }
}
