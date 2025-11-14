import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  responseData: any;
  streamingData: any;
  upcomingMovieData: any;

  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private router: Router){}

  ngOnInit(){
    this.activateRoute.url.subscribe(url => {
      const movieUrl = this.router.url;
      console.log(movieUrl);
      if(movieUrl.includes('now-streaming')){
        this.getNowStreaming();
      }
      else if(movieUrl.includes('upcoming-movies')){
        this.getUpcomingMovies();
      }
    })
  }

  getNowStreaming(){
    this.movieService.getNowPlayMovies().subscribe(response => {
      this.streamingData = response;
      this.responseData = this.streamingData.results;
      console.log(this.responseData)
    })
  }

  getUpcomingMovies(){
    this.movieService.getUpcomingMovie().subscribe(response => {
      this.upcomingMovieData = response;
      this.responseData = this.upcomingMovieData.results
      console.log(this.responseData)
    })
  }

}
