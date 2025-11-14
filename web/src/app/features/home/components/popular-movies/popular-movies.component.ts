import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent {
  nowPlayingMovies: any[] = [];
  genreData: { id: number, name: string }[] = [];

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.getMovies();
    this.getAllGenre();
  }

  getMovies() {
    this.movieService.getNowPlayMovies().subscribe((response: any) => {
      this.nowPlayingMovies = response.results;
    })
  }

  onClickMovie(val: any) {
    let movieId = val.id;
    let name = val.title.toLowerCase().replace(/\s+/g, '-').replace(/-+/g, '-');
    this.router.navigate(['movie', name, movieId]);
  }

  getAllGenre() {
    this.movieService.getGenre().subscribe((res: any) => {
      this.genreData = res.genres;
    })
  }

  getGenreNames(genreIds: number[]){
    return genreIds.map(id => {
      const genre = this.genreData.find((p: any) => p.id === id);
      return genre ? genre.name : '';
    }).filter(name => name);
  }


  onClickShowAll(){
    this.router.navigate(['/movie/now-streaming/all'])
  }
}
