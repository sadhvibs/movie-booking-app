import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatLayoutHeaderComponent } from './seat-layout-header.component';

describe('SeatLayoutHeaderComponent', () => {
  let component: SeatLayoutHeaderComponent;
  let fixture: ComponentFixture<SeatLayoutHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
