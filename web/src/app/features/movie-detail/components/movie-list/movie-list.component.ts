import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';
import { LanguageNamePipe } from 'app/shared/Pipe/language-name.pipe';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  filterMovies: any[] = [];
  streamingData: any;
  upcomingData: any;
  responseData: any[] = [];
  language: any[] = [];
  selectedLanguage: string[] = [];
  selectedrating: string | null = null;

  ratingOptions = [
    { label: '9★ above', value: '9plus' },
    { label: '8★ to 9★', value: '8to9' },
    { label: '7★ to 8★', value: '7to8' },
    { label: '6★ to 7★', value: '6to7' },
    { label: '6★ below', value: '6below' }
  ]

  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private router: Router, private languageName: LanguageNamePipe) { }

  ngOnInit() {
    this.activateRoute.url.subscribe(url => {
      const movieUrl = this.router.url;
      console.log(movieUrl);
      if (movieUrl.includes('now-streaming')) {
        this.getNowStreaming();
      }
      else if (movieUrl.includes('upcoming-movies')) {
        this.getUpcomingMovies();
      }
    })
  }

  getNowStreaming() {
    this.movieService.getNowPlayMovies().subscribe(response => {
      this.streamingData = response;
      this.responseData = this.streamingData.results;
      this.filterMovies = [...this.responseData];
      console.log(this.filterMovies);

      //considering unique  languages
      const uniqueLanguage = new Set(this.responseData.map((m => m.original_language)));
      this.language = Array.from(uniqueLanguage).map(code => ({ code, label: this.languageName.transform(code) }))
    })
  }

  getUpcomingMovies() {
    this.movieService.getUpcomingMovie().subscribe(response => {
      this.upcomingData = response;
      this.responseData = this.upcomingData.results;
      this.filterMovies = [...this.responseData];
      console.log(this.responseData)
    })
  }

  filterRating(value: string) {
    this.selectedrating = value;
    console.log(this.selectedrating)
    this.applyAllFilters();
  }

  filterLanguage(code: any) {
    if (this.selectedLanguage.includes(code)) {
      this.selectedLanguage = this.selectedLanguage.filter(m => m !== code);
    }
    else {
      this.selectedLanguage.push(code);
    }
    this.applyAllFilters();
  }

  applyAllFilters() {
    let filteredValue = [...this.responseData];

    //applied language filter
    if (this.selectedLanguage.length > 0) {
      filteredValue = filteredValue.filter(lang => this.selectedLanguage.includes(lang.original_language));
    }

    //applied rating filter
    if (this.selectedrating) {
      if (this.selectedrating === '9plus') {
        filteredValue = filteredValue.filter((p: any) => p.vote_average >= 9);
      }
      else if (this.selectedrating === '8to9') {
        filteredValue = filteredValue.filter((p: any) => p.vote_average >= 8 && p.vote_average < 9);
      }
      else if (this.selectedrating === '7to8') {
        filteredValue = filteredValue.filter((p: any) => p.vote_average >= 7 && p.vote_average < 8);
      }
      else if (this.selectedrating === '6to7') {
        filteredValue = filteredValue.filter((p: any) => p.vote_average >= 6 && p.vote_average < 7)
      }
      else {
        filteredValue = filteredValue.filter((p: any) => p.vote_average < 6)
      }
    }

    //final filter value pushed to filterMovies
    this.filterMovies = filteredValue;
    console.log(this.filterMovies)
  }
}
