import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCastsComponent } from './movie-casts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';
import { provideRouter } from '@angular/router';

describe('MovieCastsComponent', () => {
  let component: MovieCastsComponent;
  let fixture: ComponentFixture<MovieCastsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, SharedModule],
      declarations: [MovieCastsComponent],
      providers: [provideRouter([])]
    });
    fixture = TestBed.createComponent(MovieCastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
