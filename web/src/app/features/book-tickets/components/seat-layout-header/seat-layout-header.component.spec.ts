import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayoutHeaderComponent } from './seat-layout-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SeatLayoutComponent } from '../seat-layout/seat-layout.component';
import { SharedModule } from 'app/shared/shared.module';
import { Router } from '@angular/router';

describe('SeatLayoutHeaderComponent', () => {
  let component: SeatLayoutHeaderComponent;
  let fixture: ComponentFixture<SeatLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [SeatLayoutHeaderComponent, SeatLayoutComponent]
    });
    const router = TestBed.inject(Router);
    spyOn(router, 'getCurrentNavigation').and.returnValue({
      extras: {
        state: {
          bookingData: {
            seats: 2,
            selectDate: new Date(),
            selectTime: { time: '10:00 AM', price: 150 }
          }
        }
      }
    } as any);
    fixture = TestBed.createComponent(SeatLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
