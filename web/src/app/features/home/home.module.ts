import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { BannerComponent } from './components/banner/banner.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';


@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    PopularMoviesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
