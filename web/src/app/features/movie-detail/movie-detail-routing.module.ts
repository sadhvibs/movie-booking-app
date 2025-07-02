import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: MovieDetailComponent
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
