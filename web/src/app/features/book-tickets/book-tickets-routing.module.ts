import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTicketsComponent } from './book-tickets.component';
import { SelectShowtimeComponent } from './components/select-showtime/select-showtime.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookTicketsRoutingModule { }
