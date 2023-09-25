import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from 'src/app/directives/special.directive';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, FormsModule, SpecialDirective],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  message: { greetings: string; port: number; status: string } = {
    greetings: 'Hola! Comos Estas?',
    port: 4200,
    status: 'Working | All Good',
  };

  getServerStatus(): string {
    return this.message.status;
  }

  // imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';

  isLikeDisabled: boolean = false;
  isShareDisabled: boolean = true;
  toggle: boolean = false;

  count: number = 0;
  

  onLike(): void {
    this.toggle = !this.toggle;
    // this.message.status = this.toggle? "Working" : "Down";
    this.count +=1;
  }

  cars: string[] = ['Tesla', 'BYD', 'Tata']
}
