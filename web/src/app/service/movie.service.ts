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

  getNowPlayMovies(){
    return this.http.get(`${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`) 
  }
  
  getGenre(){
    return this.http.get<{ genres: { id: number; name: string }[] }>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`)
  }
}
