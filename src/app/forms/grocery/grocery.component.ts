import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/gcard/gcard.model';
import { GcardComponent } from "../../components/gcard/gcard.component";

@Component({
    selector: 'app-grocery',
    standalone: true,
    templateUrl: './grocery.component.html',
    styleUrls: ['./grocery.component.scss'],
    imports: [CommonModule, GcardComponent]
})
export class GroceryComponent implements OnInit {

  groceryCards: Card[] = [];

  ngOnInit(): void {
      this.groceryCards = [
          {
              id: '1',
              name: 'Brocauli',
              price: 1500,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
              description: 'Football description'
          },
          {
              id: '2',
              name: 'Juice',
              price: 6000,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
              description: 'Football description'
          }
      ];
  }

}
