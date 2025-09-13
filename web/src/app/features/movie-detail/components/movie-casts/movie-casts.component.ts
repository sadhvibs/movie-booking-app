import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-movie-casts',
  templateUrl: './movie-casts.component.html',
  styleUrls: ['./movie-casts.component.scss']
})
export class MovieCastsComponent {
  castsData: any[] = [];
  movieId: any;
  slickIndex = 0;

  currentSlide = 0
  totalSlide = 0;
  visibleSlides = 5;

  canShowPrev = false;
  canShowNext = true;


  @ViewChild('slickModal', { static: false }) slickModal: any;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param: any) => {
      this.movieId = param.get('id');
      this.onLoadCasts(this.movieId);
    })
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.totalSlide = this.castsData.length;
      this.checkArrowVisibility();
    });
  }

  onLoadCasts(id: number) {
    this.movieService.getMovieCasts(id).subscribe((res: any) => {
      this.castsData = res.cast.slice(0, 10);
    })
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
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 640,
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
