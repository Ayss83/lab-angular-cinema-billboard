import { Injectable } from '@angular/core';
import { Movie, movies } from './movies-data';

@Injectable()
export class MoviesService {

  movies: Movie[] = [...movies];

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: number) {
    return this.movies.find(oneMovie => oneMovie.id === id);
  }
}
