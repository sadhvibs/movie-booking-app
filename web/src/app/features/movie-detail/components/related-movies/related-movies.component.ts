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

  slickIndex = 0;

  currentSlide = 0
  totalSlide = 0;
  visibleSlides = 5;

  canShowPrev = false;
  canShowNext = true;

  @ViewChild('slickModal', { static: false }) slickModal: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private router: Router) { }

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

      const currentGenreId: number[] = this.movieInfo?.genre_ids || [];

      const relatedId = this.movieInfoData.filter((movie: any) => {
        if (movie.id === this.movieInfo.id) return false;

        return movie.genre_ids.some((genreId: number) => currentGenreId.includes(genreId))
      });
      this.filterGenreData = relatedId.slice(0, 10);
      console.log(this.filterGenreData)
      this.getGenreNames(this.movieInfo.genre_ids);
    })
  }

  onLoadAllGenre() {
    this.movieService.getGenre().subscribe(res => {
      this.genreData = res.genres;
    })
  }

  getGenreNames(genreIds: number[]) {
    this.genreiid = genreIds.map((id: any) => {
      const genre = this.genreData.find((p: any) => p.id === id);
      return genre ? genre.name : '';
    }).filter(name => name);
    return this.genreiid;
  }

  slideConfig = {
    slidesToShow: this.visibleSlides,
    slidesToScroll: 5,
    arrows: false,
    infinite: false,
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

  afterChange(e: any) {
    this.currentSlide = e.currentSlide;
    this.checkArrowVisibility();
  }

  checkArrowVisibility() {
    this.canShowPrev = this.currentSlide > 0;
    this.canShowNext = this.currentSlide + this.visibleSlides < this.totalSlide;
  }
}
