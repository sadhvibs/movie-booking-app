import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketsComponent } from './book-tickets.component';
import { SelectShowtimeComponent } from './components/select-showtime/select-showtime.component';
import { SeatLayoutComponent } from './components/seat-layout/seat-layout.component';
import { SeatLayoutHeaderComponent } from './components/seat-layout-header/seat-layout-header.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: BookTicketsComponent
      },
      {
        path: ':id',
        component: SelectShowtimeComponent
      },
      {
        path: 'seat-layout/:id',
        component: SeatLayoutHeaderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTicketsRoutingModule { }
