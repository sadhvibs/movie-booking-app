import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectShowtimeComponent } from './select-showtime.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';

describe('SelectShowtimeComponent', () => {
  let component: SelectShowtimeComponent;
  let fixture: ComponentFixture<SelectShowtimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
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
