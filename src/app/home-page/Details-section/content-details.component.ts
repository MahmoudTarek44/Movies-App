import { LoaderService } from './../../services/loader.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-content-details',
  templateUrl: './content-details.component.html',
  styleUrls: ['./content-details.component.scss'],
})
export class ContentDetailsComponent implements OnInit {
  mediaID: any;
  mediaDetails: any;

  // Observable handlers >>
  movieRequest: any;
  tvRequest: any;
  personRequest: any;

  constructor(
    private _activeMedia: ActivatedRoute,
    private _apiRequest: ApiRequestService,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.mediaID = this._activeMedia.snapshot.url[3].path;

    // this.mediaID = this._activeMedia.queryParamMap.subscribe((params) => {
    //   console.log(params);
    // });

    switch (this._activeMedia.snapshot.url[1].path) {
      case 'movie':
        this.movieRequest = this._apiRequest
          .getMovieDetails(this.mediaID)
          .subscribe((result) => {
            this.mediaDetails = result;
            console.log(this.mediaDetails);
          });
        break;
      case 'tv':
        this.tvRequest = this._apiRequest
          .getTVDetails(this.mediaID)
          .subscribe((result) => {
            this.mediaDetails = result;
            console.log(result);
          });
        break;
      case 'person':
        this.personRequest = this._apiRequest
          .getPersonDetails(this.mediaID)
          .subscribe((result) => {
            this.mediaDetails = result;
            console.log(result);
          });
        break;
      default:
        console.log('No such media type');
        break;
    }
  }
  ngOnDestroy(): void {
    // unsubscribe observables streams >>

    if (this.movieRequest) {
      this.movieRequest.unsubscribe();
    } else if (this.tvRequest) {
      this.tvRequest.unsubscribe();
    } else {
      this.personRequest.unsubscribe();
    }
  }
}
