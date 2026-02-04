import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-seat-layout-header',
  templateUrl: './seat-layout-header.component.html',
  styleUrls: ['./seat-layout-header.component.scss']
})
export class SeatLayoutHeaderComponent {
  movieId: any;
  movieInfo: any;
  bookingData: any;
  totalPrice: any;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.movieId = param.get('id');
      if (this.movieId) {
        this.loadMovieDetails(this.movieId);
      }
    });

    // Works during navigation
    const nav = this.router.getCurrentNavigation();
    this.bookingData = nav?.extras?.state?.['bookingData'] || history?.state['bookingData'];

    // Fallback (works after refresh too)
    if (this.bookingData) {
      this.totalPrice =
        this.bookingData.seats * this.bookingData.selectTime.price;
    }
  }

  loadMovieDetails(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res: any) => {
      this.movieInfo = res;
    })
  }

}
