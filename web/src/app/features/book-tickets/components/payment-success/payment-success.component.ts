import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})
export class PaymentSuccessComponent {
  bookingData: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    this.bookingData = nav?.extras.state?.['bookingData'];
    console.log(this.bookingData)
  }
}
