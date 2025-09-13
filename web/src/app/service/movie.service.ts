import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiKey = environment.tmdbApiKey;
  private baseUrl = 'https://api.themoviedb.org/3'

  constructor(private http: HttpClient) { }

  getNowPlayMovies() {
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getGenre() {
    return this.http.get<{ genres: { id: number, name: string }[] }>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`)
  }

  getTopRates() {
    return this.http.get(`${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getUpcomingMovie() {
    return this.http.get(`${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getVideo(movieId: number) {
    return this.http.get(`${this.baseUrl}/movie/${movieId}/videos/?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getMovieCasts(movieId: number){
    return this.http.get(`${this.baseUrl}/movie/${movieId}/credits?api_key=${this.apiKey}`)
  }

  getMovieWatchList(){
    return this.http.get(`${this.baseUrl}/account/{account_id}/watchlist`)
  }

  getRecommendations(movieId: number){
    return this.http.get(`${this.baseUrl}/movie/${movieId}/recommendations?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getMovieDetails(id: number){
    return this.http.get(`${this.baseUrl}/movie/${id}?api_key=${this.apiKey}&language=en-US`)
  }

}
