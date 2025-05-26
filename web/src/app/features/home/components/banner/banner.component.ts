import { Component } from '@angular/core';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent {
  // nowPlayingMovies: any[] = [];

  // constructor(private movieService: MovieService) { }

  // ngOnInit() {
  //   this.getMovies();
  // }

  // getMovies() {
  //   this.movieService.getNowPlayMovies().subscribe((response: any) => {
  //     this.nowPlayingMovies = response.results;
  //     console.log(this.nowPlayingMovies)
  //   })
  // }
}
