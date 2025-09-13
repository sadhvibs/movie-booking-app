import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShowtimeComponent } from './select-showtime.component';

describe('SelectShowtimeComponent', () => {
  let component: SelectShowtimeComponent;
  let fixture: ComponentFixture<SelectShowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectShowtimeComponent]
    });
    fixture = TestBed.createComponent(SelectShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
