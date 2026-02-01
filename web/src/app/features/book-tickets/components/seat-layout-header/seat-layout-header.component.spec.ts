import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayoutHeaderComponent } from './seat-layout-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SeatLayoutHeaderComponent', () => {
  let component: SeatLayoutHeaderComponent;
  let fixture: ComponentFixture<SeatLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [SeatLayoutHeaderComponent]
    });
    fixture = TestBed.createComponent(SeatLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
