import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
  genreiid : any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.movieId = param.get('id');
      this.onLoadTopmovieInfo(this.movieId)
      this.onLoadAllGenre();
    })
  }

  onLoadTopmovieInfo(id: any) {
    this.movieService.getNowPlayMovies().subscribe((res: any) => {
      this.movieInfoData = res.results;
      this.movieInfo = this.movieInfoData.find((p: any) => p.id == id);
      this.getGenreNames(this.movieInfo.genre_ids);
    })
  }

  onLoadAllGenre() {
    this.movieService.getGenre().subscribe(res => {
      this.genreData = res.genres;
    })
  }

  getGenreNames(genreIds: number[]) {
    return genreIds.map((id: any) => {
      const genre = this.genreData.find((p: any) => p.id === id);
      return genre ? genre.name : '';
    }).filter(name => name)
  }
}
