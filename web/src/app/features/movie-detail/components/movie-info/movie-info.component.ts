import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent {
  movieInfoData: any;
  movieInfo: any;
  movieId: any;
  genreData: { id: number, name: string }[] = [];
  genreiid: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.movieId = param.get('id');
      this.onLoadAllGenre();
      this.onLoadmovieInfo(this.movieId);
    })
  }

  onLoadmovieInfo(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res: any) => {
      this.movieInfo = res;
    })
  }

  onLoadAllGenre() {
    this.movieService.getGenre().subscribe(res => {
      this.genreData = res.genres;
    })
  }

  getGenreNames(genres: { id: number, name: string }[]) {
    return genres.map(g => g.name)
  }

  onClickBookTicket(id: any) {
    this.router.navigate(['movies/book-tickets', id])
  }
}
