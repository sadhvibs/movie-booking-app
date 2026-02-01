import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailComponent } from './movie-detail.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieInfoComponent } from './components/movie-info/movie-info.component';
import { MovieCastsComponent } from './components/movie-casts/movie-casts.component';
import { RelatedMoviesComponent } from './components/related-movies/related-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'app/shared/shared.module';

describe('MovieDetailComponent', () => {
  let component: MovieDetailComponent;
  let fixture: ComponentFixture<MovieDetailComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, SharedModule],
      declarations: [MovieDetailComponent, MovieInfoComponent, MovieCastsComponent, RelatedMoviesComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(MovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
