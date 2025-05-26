import { Component } from '@angular/core';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  styleUrls: ['./popular-movies.component.scss']
})
export class PopularMoviesComponent {
  nowPlayingMovies: any[] = [];
  genreData: { [id: number]: string } = {};

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
    this.getAllGenre();
  }

  getMovies() {
    this.movieService.getNowPlayMovies().subscribe((response: any) => {
      this.nowPlayingMovies = response.results;
      console.log(this.nowPlayingMovies)
    })
  }

  getAllGenre() {
    this.movieService.getGenre().subscribe(res => {
      this.genreData = res.genres.reduce((acc: { [key: number]: string }, genre: { id: number; name: string }) => {
        acc[genre.id] = genre.name;
        return acc;
      }, {});
      console.log(this.genreData)
    });
  }


}
