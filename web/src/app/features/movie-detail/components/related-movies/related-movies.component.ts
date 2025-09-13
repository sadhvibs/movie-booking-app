import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-related-movies',
  templateUrl: './related-movies.component.html',
  styleUrls: ['./related-movies.component.scss']
})
export class RelatedMoviesComponent {

  movieInfoData: any;
  movieInfo: any;
  movieId: any;
  genreData: { id: number, name: string }[] = [];
  genreiid: any;
  filterGenreData: any[] = [];

  canShowPrev = true;
  canShowNext = true;

  @ViewChild('slickModal', { static: false }) slickModal: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.movieId = param.get('id');
      this.onLoadRelatedMovies(this.movieId);
    })
  }

  onLoadRelatedMovies(id: number){
    this.movieService.getRecommendations(id).subscribe((res: any) => {
      this.filterGenreData = res.results.slice(0, 10);
    })
  }
  
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };

}
