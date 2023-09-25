import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';

// export interface Users {
//   username: string;
//   age: number;
//   address: string;
// }

// const ELEMENT_DATA: Users[] = [
//   {username: 'Steve', age: 75, address: 'Brooklyn'},
//   {username: 'Tony', age: 35, address: 'NYC'},
//   {username: 'Natasha', age: 19, address: 'Belarus'},
//   {username: 'Wanda', age: 18, address: 'Sokovia'},
//   {username: 'Strange', age: 37, address: 'NYC'},
// ];

@Component({
  selector: 'app-task3',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.scss']
})

export class Task3Component {
  // displayedColumns: string[] = ['username', 'age', 'address'];
  // dataSource = ELEMENT_DATA;

  users = [
    {username: 'Steve', age: 75, address: 'Brooklyn'},
    {username: 'Tony', age: 35, address: 'NYC'},
    {username: 'Natasha', age: 19, address: 'Belarus'},
    {username: 'Wanda', age: 18, address: 'Sokovia'},
    {username: 'Strange', age: 37, address: 'NYC'},
  ];
}
