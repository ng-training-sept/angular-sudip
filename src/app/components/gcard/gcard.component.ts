import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Card } from './gcard.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';

@Component({
  selector: 'app-gcard',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatDialogModule],
  templateUrl: './gcard.component.html',
  styleUrls: ['./gcard.component.scss']
})



export class GcardComponent {
  // @Input() cards: Card[] = [
  //   {id: '1', name: 'Steve', price: 75, description: 'Brooklyn'},
  //   {id: '1', name: 'Tony', price: 35, description: 'NYC'},
  //   {id: '1', name: 'Natasha', price: 19, description: 'Belarus'},
  //   {id: '1', name: 'Wanda', price: 18, description: 'Sokovia'},
  //   {id: '1', name: 'Strange', price: 37, description: 'NYC'},
  // ];

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);

  @Input({ required: true }) cards: Card[] = [];

  goToItemDetails(data: Card): void {
    this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route}).then();
  }

  openItemDialog(data: Card): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {
      data // initial data to dialog (remember dialogData in ItemSaveUpdateComponent)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        // emit update event and call service from parent to update card
      }
    });
  }
}
