import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastsComponent } from './movie-casts.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';

describe('MovieCastsComponent', () => {
  let component: MovieCastsComponent;
  let fixture: ComponentFixture<MovieCastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [MovieCastsComponent]
    });
    fixture = TestBed.createComponent(MovieCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
