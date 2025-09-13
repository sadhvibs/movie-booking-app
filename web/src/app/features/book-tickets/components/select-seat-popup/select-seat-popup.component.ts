import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-select-seat-popup',
  templateUrl: './select-seat-popup.component.html',
  styleUrls: ['./select-seat-popup.component.scss']
})
export class SelectSeatPopupComponent {
  selectedSeats = 1;
  maxSeats = 8;

  constructor(private dialogRef: MatDialogRef<SelectSeatPopupComponent>) { }

  ngOnInit() {
  }

  increment() {
    if (this.selectedSeats < this.maxSeats) {
      this.selectedSeats += 1;
    }
  }

  decrement() {
    if (this.selectedSeats > 1) {
      this.selectedSeats -= 1;
    }
  }

  onClickConfirm() {
    this.dialogRef.close(this.selectedSeats)
  }

  onClickCancel() {
    this.dialogRef.close();
  }
}
