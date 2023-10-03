import { computed, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { Card } from 'src/app/components/gcard/gcard.model';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export type SportsState = {
  sports: Card[];
}

@Injectable({
  providedIn:'root'
})
export class SportsStore {

  private readonly httpClient = inject(HttpClient);

  private state: WritableSignal<SportsState> = signal<SportsState>({
    sports: []        // can update state with writable
  });

  sports: Signal<Card[]> = computed(() => this.state().sports);

  fetchSports(): void {
    this.httpClient.get<Card[]>('http://localhost:3000/sports').subscribe(response => {
      this.state.set({ sports: response });
    });
  }

  saveSport(sports: Card): void {
    this.httpClient.post<Card>('http://localhost:3000/sports', sports).subscribe(res => {
      this.state.mutate(state => state.sports.push(res));
    });
  }

  updateSport(id:string,sport: Card): void {
    this.httpClient.put<Card>(`http://localhost:3000/sports/${id}`, sport).subscribe(
      () => {
        console.log('successful');
      },
      (error) => {
        console.error('Error updating sport:', error);
        // Handle error here, if needed
      }
    );
  }
}