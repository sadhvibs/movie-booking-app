import { Component } from '@angular/core';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.scss']
})
export class TopRatedComponent {
  ratedMovie: any;
  genreData: { id: number, name: string }[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.onLoadTopRated()
    this.getAllGenre();
  }

  onLoadTopRated() {
    this.movieService.getTopRates().subscribe((res: any) => {
      this.ratedMovie = res.results;
      // console.log(this.ratedMovie)
    })
  }

  getRatedId(id: any){
    console.log(id)
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
