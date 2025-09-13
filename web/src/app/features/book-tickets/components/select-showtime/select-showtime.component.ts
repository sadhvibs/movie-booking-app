import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'app/service/movie.service';
import { SelectSeatPopupComponent } from '../select-seat-popup/select-seat-popup.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-select-showtime',
  templateUrl: './select-showtime.component.html',
  styleUrls: ['./select-showtime.component.scss']
})
export class SelectShowtimeComponent {
  movieId: string | null = null;

  showTime: { time: string, price: number }[] = [];
  movieInfo: any;

  dates: { day: string, date: string, fullDate: Date }[] = [];
  selectedDate: Date = new Date();
  selectedTime: { time: string, price: number } | null = null;

  selectedSeats: any;

  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private dialog: MatDialog) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(param => {
      this.movieId = param.get('id');
      console.log(this.movieId)
      if (this.movieId) {
        this.loadMovieDetails(this.movieId)
      }
      this.generateNext7Days();
      this.selectedDate = this.dates[0].fullDate;
      this.loadShowtimes(this.selectedDate);
    });
  }

  loadMovieDetails(id: any) {
    this.movieService.getMovieDetails(id).subscribe((res: any) => {
      this.movieInfo = res;
      console.log(this.movieInfo)
    })
  }

  loadShowtimes(date: Date) {
    const day = date.getDay(); // 0 = Sunday, 6 = Saturday

    if (day === 0 || day === 6) {
      // Weekend slots
      this.showTime = [
        { time: '09:00 AM', price: 220 },
        { time: '12:00 PM', price: 270 },
        { time: '03:00 PM', price: 300 },
        { time: '06:30 PM', price: 350 },
        { time: '09:30 PM', price: 350 }
      ];
    } else {
      // Weekday slots
      this.showTime = [
        { time: '10:00 AM', price: 200 },
        { time: '01:30 PM', price: 250 },
        { time: '04:00 PM', price: 250 },
        { time: '07:30 PM', price: 300 },
        { time: '10:30 PM', price: 300 }
      ];
    }
  }
  generateNext7Days() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);

      this.dates.push({
        day: nextDay.toLocaleDateString('en-US', { weekday: 'short' }),
        date: nextDay.toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
        fullDate: nextDay
      });
    }
  }

  selectDate(date: any) {
    this.selectedDate = date.fullDate;
    if (this.selectedDate) {
      this.loadShowtimes(this.selectedDate);
    }
  }

  selectTime(time: any) {
    this.selectedTime = time;
  }

  openDialog(){
    const dialogRef = this.dialog.open(SelectSeatPopupComponent)

     dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(`✅ Seats selected: ${result}`);
        this.selectedSeats = result;
      }
    });
  }
}
