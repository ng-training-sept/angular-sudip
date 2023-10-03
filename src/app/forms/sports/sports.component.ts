import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/gcard/gcard.model';
import { GcardComponent } from '../../components/gcard/gcard.component';
// import { Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environment';
import { AuthService } from 'src/app/service/auth/auth.service';
import { SportsStore } from './sports.store';
// import { LOGGER } from 'src/app/service/logger/logger';
// import { LoggerService } from 'src/app/service/logger/logger.service';

@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule, GcardComponent, HttpClientModule],
  providers: [
    AuthService,
    // {provide: LOGGER, useClass: LoggerService},
    SportsStore
  ]
})
export class SportsComponent implements OnInit {
//   sportCards: Card[] = [];
  // private readonly http = inject(HttpClient);
  readonly sportsStore = inject(SportsStore);

  ngOnInit(): void {
    this.sportsStore.fetchSports();
    // setTimeout(() => {
    //     this.sportsStore.saveSport({
    //       id: 'test 4',
    //       name: 'Test 3',
    //       description: 'test 3',
    //       price: 603.55,
    //       imageUrl: ''
    //     });
    //   }, 5000)

    // console.log(this.sportsStore);
    
    // this.http
    //   .get<Card[]>(`${environment.baseUrl}/sports`)
    //   .subscribe((sports) => (this.sportCards = sports));

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
