import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayoutComponent } from './seat-layout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';

describe('SeatLayoutComponent', () => {
  let component: SeatLayoutComponent;
  let fixture: ComponentFixture<SeatLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [SeatLayoutComponent]
    });
    fixture = TestBed.createComponent(SeatLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
