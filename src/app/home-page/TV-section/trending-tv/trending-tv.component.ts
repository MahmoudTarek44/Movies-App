import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';
import { ApiRequestService } from 'app/services/api-request.service';
import { tv } from 'app/interfaces/tvinterface';

@Component({
  selector: 'app-trending-tv',
  templateUrl: './trending-tv.component.html',
  styleUrls: ['./trending-tv.component.scss'],
})
export class TrendingTvComponent implements OnInit {
  private tvRequest: any;
  trendingtv: Array<tv> = [];

  constructor(
    private _ApiRequestService: ApiRequestService,
    public _loader: LoaderService
  ) {}
  ngOnInit(): void {
    this.tvRequest = this._ApiRequestService
      .getTrendingTV()
      .subscribe((res) => {
        this.trendingtv = res;
      });
  }
  ngOnDestroy(): void {
    this.tvRequest.unsubscribe();
  }
}
