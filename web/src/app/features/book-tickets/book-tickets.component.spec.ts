import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTicketsComponent } from './book-tickets.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('BookTicketsComponent', () => {
  let component: BookTicketsComponent;
  let fixture: ComponentFixture<BookTicketsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [BookTicketsComponent]
    });
    fixture = TestBed.createComponent(BookTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
