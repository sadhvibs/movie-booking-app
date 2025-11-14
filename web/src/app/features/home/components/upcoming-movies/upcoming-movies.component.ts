import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-upcoming-movies',
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.scss']
})
export class UpcomingMoviesComponent {
  upcomingMovie: any;
  genreData: { id: number, name: string }[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.onLoadUpcomingMovies()
    this.getAllGenre();
  }

  onLoadUpcomingMovies() {
    this.movieService.getUpcomingMovie().subscribe((res: any) => {
      this.upcomingMovie = res.results;
    })
  }

  getAllGenre() {
    this.movieService.getGenre().subscribe((res: any) => {
      this.genreData = res.genres;
    })
  }

  getGenreNames(genreId: number[]): string[] {
    return genreId.map(id => {
      const genre = this.genreData.find((p: any) => p.id === id)
      return genre ? genre.name : '';
    }).filter(name => name);
  }

    onClickShowAll(){
    this.router.navigate(['/movie/upcoming-movies/all'])
  }

}
