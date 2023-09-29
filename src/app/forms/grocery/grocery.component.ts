import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/gcard/gcard.model';
import { GcardComponent } from '../../components/gcard/gcard.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';

@Component({
  selector: 'app-grocery',
  standalone: true,
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.scss'],
  imports: [CommonModule, GcardComponent, HttpClientModule],
})
export class GroceryComponent implements OnInit {
  groceryCards: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Card[]>(`${environment.baseUrl}/grocery`)
      .subscribe((grocery) => (this.groceryCards = grocery));

    // this.groceryCards = [
    //   {
    //     id: '1',
    //     name: 'Sausage',
    //     price: 1500,
    //     imageUrl:
    //       'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
    //     description: 'Chicken Sausage',
    //   },
    //   {
    //     id: '2',
    //     name: 'Juice',
    //     price: 6000,
    //     imageUrl:
    //       'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
    //     description: 'Un jugo de naranja',
    //   },
    // ];
  }
}
