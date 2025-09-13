import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';

@Component({
  selector: 'app-seat-layout',
  templateUrl: './seat-layout.component.html',
  styleUrls: ['./seat-layout.component.scss']
})
export class SeatLayoutComponent {
  @Input() bookingData: any;
  seatLayout: any[] = [];
  movieInfo: any;
  selectedSeats: any[] = [];

  constructor(private router: Router, private movieService: MovieService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.seatLayout = [
      { row: 'A', seats: this.generateSeats(1, 10) },
      { row: 'B', seats: this.generateSeats(11, 10) },
      { row: 'C', seats: this.generateSeats(21, 10) },
      { row: 'D', seats: this.generateSeats(31, 10) }
    ]
    this.activatedRoute.paramMap.subscribe(param => {
      const movieId = param.get('id');
      if (movieId) {
        this.loadMovieDetails(movieId);
      }
    });

  }

  loadMovieDetails(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res: any) => {
      this.movieInfo = res;
      console.log(this.movieInfo)
    });
  }

  generateSeats(start: number, count: number) {
    const seats = [];
    for (let i = 0; i < count; i++) {
      seats.push({
        number: start + i,
        booked: false,
        selected: false
      })
    }
    return seats;
  }

  toggleSeat(seat: any) {
    if (seat.booked) return;

    const maxSeats = Number(this.bookingData.seats);
    if (!seat.selected && this.selectedSeats.length >= maxSeats) {
      alert(`You can only select ${maxSeats} seats`);
      return
    }
    seat.selected = !seat.selected;

    if (seat.selected) {
      this.selectedSeats.push(seat.number);

    }
    else {
      this.selectedSeats = this.selectedSeats.filter(s => s !== seat.number);
    }
    console.log(this.selectedSeats)
  }

  onClickPayment() {
    const totalPrice = this.selectedSeats.length * this.bookingData.selectTime.price;

    const finalBookingData = {
      ...this.bookingData,
      selectedSeats: this.selectedSeats,
      totalPrice,
      movieTitle: this.movieInfo?.title
    };

    this.router.navigate(['/payment-success'], {
      state: { bookingData: finalBookingData }
    });
  }
}

