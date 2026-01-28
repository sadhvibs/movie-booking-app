import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'app/service/movie.service';
import { forkJoin, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  value: string = '';
  filteredItems: string[] = [];
  allMovies: any[] = [];
  private $destroy = new Subject<void>();

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    forkJoin({
      nowPlaying: this.movieService.getNowPlayMovies(),
      upcomingMovies: this.movieService.getUpcomingMovie()
    }).pipe(takeUntil(this.$destroy)).subscribe(({ nowPlaying, upcomingMovies }: any) => {
      const movies = [...nowPlaying.results, ...upcomingMovies.results];

      const uniqueMovies = new Map<number, any>();

      movies.forEach(m => uniqueMovies.set(m.id, m));

      this.allMovies = Array.from(uniqueMovies.values()).map(m => ({
        ...m,
        searchTitle: m.title.toLowerCase()
      }))
    })
  }

  search(event: any) {
    const query = event.query?.toLowerCase().trim();
    if (!query || query.length < 2) {
      this.filteredItems = [];
      return;
    };
    this.filteredItems = this.allMovies.filter((p: any) => p.searchTitle.includes(query));
    console.log(this.filteredItems)
  }

  onSelectMovie(event: any) {
    this.router.navigate(['movie', event.searchTitle.replace(/\s+/g, '-').replace(/-+/g, '-'), event.id])
  }

  ngOnDestroy() {
    this.$destroy.next();
    this.$destroy.complete();
  }

}
