import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes: Routes = [
    {
    path: 'now-streaming/all',
    component: MovieListComponent
  },
  {
    path: 'upcoming-movies/all',
    component: MovieListComponent
  },
  {
    path: '',
    children: [
      {
        path: '',
        component: MovieDetailComponent,

      },
      {
        path: ':iid/:id',
        component: MovieDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieDetailRoutingModule { }
