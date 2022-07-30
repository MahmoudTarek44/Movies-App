import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'app/services/api-request.service';
import { LoaderService } from '../../../services/loader.service';
import { movies } from 'app/interfaces/moviesinterface';

@Component({
  selector: 'app-trending-movies',
  templateUrl: './trending-movies.component.html',
  styleUrls: ['./trending-movies.component.scss'],
})
export class TrendingMoviesComponent implements OnInit {
  private moviesRequest: any;
  trendingmovies: Array<movies> = [];

  constructor(
    private _ApiRequestService: ApiRequestService,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.moviesRequest = this._ApiRequestService
      .getTrendingMovies()
      .subscribe((res) => {
        this.trendingmovies = res;
        console.log(res);
      });
  }
  ngOnDestroy(): void {
    this.moviesRequest.unsubscribe();
  }
}
