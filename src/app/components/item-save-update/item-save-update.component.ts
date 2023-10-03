import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { SportsStore } from 'src/app/forms/sports/sports.store';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatInputModule, MatButtonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss'],
  providers: [SportsStore]
})

export class ItemSaveUpdateComponent implements OnInit {


  sportsStore = inject(SportsStore);
  itemForm! :FormGroup;

  // we will use dialogRef later to dynamically close dialog when user clicks save
  private readonly dialogRef = inject(MatDialogRef);
  
  // injecting dialogData to access whatever data is passed when we initially open dialog
  // for example, we can send item/card information that we want to update
  // and use this information to population form
  private readonly dialogData = inject(MAT_DIALOG_DATA);

  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
    this.itemForm.valueChanges.subscribe(data => console.log(data));
  }
  
  initItemForm(): void {
    this.itemForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }

  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
    }
  }

  onSaveOrUpdate(): void {
    if(!this.dialogData)
    {
      this.sportsStore.saveSport({...this.itemForm.value,id:Math.random.toString()});
      this.dialogRef.close({ data: this.itemForm.value });
      return;
    }
    this.sportsStore.updateSport(this.dialogData.id,this.itemForm.value);
    this.dialogRef.close({ data: this.itemForm.value });
  }

}
