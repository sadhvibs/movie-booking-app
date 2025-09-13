import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./features/movie-detail/movie-detail.module').then(m => m.MovieDetailModule)
  },
  {
    path: 'movies/book-tickets',
    loadChildren: ()=> import('./features/book-tickets/book-tickets.module').then(m=> m.BookTicketsModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
