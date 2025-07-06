import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';

import { MovieDetailRoutingModule } from './movie-detail-routing.module';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieCastsComponent } from './components/movie-casts/movie-casts.component';
import { RelatedMoviesComponent } from './components/related-movies/related-movies.component';
import { MovieReviewComponent } from './components/movie-review/movie-review.component';


@NgModule({
  declarations: [
    MovieDetailComponent,
    MovieInfoComponent,
    MovieCastsComponent,
    RelatedMoviesComponent,
    MovieReviewComponent,
  ],
  imports: [
    CommonModule,
    MovieDetailRoutingModule,
    SharedModule
  ]
})
export class MovieDetailModule { }
