import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/gcard/gcard.model';
import { GcardComponent } from '../../components/gcard/gcard.component';
// import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, GcardComponent, HttpClientModule],
})
export class SportsComponent implements OnInit {
  sportCards: Card[] = [];
  private readonly http = inject(HttpClient);

  ngOnInit(): void {
    this.http
      .get<Card[]>(`${environment.baseUrl}/sports`)
      .subscribe((sports) => (this.sportCards = sports));

    //   this.sportCards = [
    //       {
    //           id: '1',
    //           name: 'Football',
    //           price: 1500,
    //           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
    //           description: 'Brazuca'
    //       },
    //       {
    //           id: '2',
    //           name: 'Football Boot',
    //           price: 6000,
    //           imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
    //           description: 'Spectra'
    //       }
    //   ];
  }
}
