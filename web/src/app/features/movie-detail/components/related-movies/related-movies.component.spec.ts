import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedMoviesComponent } from './related-movies.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'app/shared/shared.module';

describe('RelatedMoviesComponent', () => {
  let component: RelatedMoviesComponent;
  let fixture: ComponentFixture<RelatedMoviesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule, SharedModule],
      declarations: [RelatedMoviesComponent]
    });
    fixture = TestBed.createComponent(RelatedMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
