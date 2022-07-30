import { LoaderService } from 'app/services/loader.service';
import { ApiRequestService } from 'app/services/api-request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-news',
  templateUrl: './media-news.component.html',
  styleUrls: ['./media-news.component.scss'],
})
export class MediaNewsComponent implements OnInit {
  upcomingMovies: any;
  upcomingTV: any;
  moviesRequest: any;
  tvRequest: any;

  constructor(
    private _apiRequest: ApiRequestService,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.moviesRequest = this._apiRequest
      .getUpcomingMovies()
      .subscribe((result) => {
        this.upcomingMovies = result;
      });
    this.tvRequest = this._apiRequest.getUpcomingTV().subscribe((result) => {
      this.upcomingTV = result;
    });
  }

  ngOnDestroy(): void {
    this.moviesRequest.unsubscribe();
    this.tvRequest.unsubscribe();
  }
}
