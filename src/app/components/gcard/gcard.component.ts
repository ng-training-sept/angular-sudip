import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './gcard.model';

@Component({
  selector: 'app-gcard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './gcard.component.html',
  styleUrls: ['./gcard.component.scss']
})



export class GcardComponent {
  @Input() cards: Card[] = [
    {id: '1', name: 'Steve', price: 75, description: 'Brooklyn'},
    {id: '1', name: 'Tony', price: 35, description: 'NYC'},
    {id: '1', name: 'Natasha', price: 19, description: 'Belarus'},
    {id: '1', name: 'Wanda', price: 18, description: 'Sokovia'},
    {id: '1', name: 'Strange', price: 37, description: 'NYC'},
  ];
}
