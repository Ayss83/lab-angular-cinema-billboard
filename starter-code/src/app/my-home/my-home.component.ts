import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {
  movieId: number;

  constructor(
    private movieService: MoviesService,
    private request: ActivatedRoute
  ) { }

  ngOnInit() {
    this.request.paramMap.subscribe(myParams => {
      this.movieId = Number(myParams.get("id"));
    })
  }
}
