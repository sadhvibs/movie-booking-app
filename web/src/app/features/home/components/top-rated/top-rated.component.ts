import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {
  ratedMovie: any;
  genreData: { id: number, name: string }[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.onLoadTopRated()
    this.getAllGenre();
  }

  onLoadTopRated() {
    this.movieService.getTopRates().subscribe((res: any) => {
      this.ratedMovie = res.results;
    })
  }

  getRatedId(movie: any){
    const movieId = movie.id;
    let name = movie.title.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['movie', name, movieId])
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

}
