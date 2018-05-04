import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movies-data';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movieList: Movie[];
  movieId: number;

  constructor(
    private movieService: MoviesService,
    private request: ActivatedRoute
  ) { }

  ngOnInit() {
    this.movieList = [...this.movieService.getMovies()]
    this.request.paramMap.subscribe(myParams => {
      this.movieId = Number(myParams.get("id"));
    })
  }
}
