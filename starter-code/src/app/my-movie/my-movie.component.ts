import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies-data';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: number;
  currentMovie: Movie;

  constructor(
    public movieService: MoviesService,
    private request: ActivatedRoute
  ) { }

  ngOnInit() {
    this.request.paramMap.subscribe(myParams => {
      this.movieId = Number(myParams.get("id"));
      this.currentMovie = this.movieService.getMovie(this.movieId);
    })
  }

}
