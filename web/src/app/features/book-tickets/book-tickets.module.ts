import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { BookTicketsRoutingModule } from './book-tickets-routing.module';
import { BookTicketsComponent } from './book-tickets.component';
import { SelectShowtimeComponent } from './components/select-showtime/select-showtime.component';
import { SelectSeatPopupComponent } from './components/select-seat-popup/select-seat-popup.component';


@NgModule({
  declarations: [
    BookTicketsComponent,
    SelectShowtimeComponent,
    SelectSeatPopupComponent
  ],
  imports: [
    CommonModule,
    BookTicketsRoutingModule,
    SharedModule
  ]
})
export class BookTicketsModule { }
