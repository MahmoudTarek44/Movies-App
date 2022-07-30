import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiRequestService } from 'app/services/api-request.service';
import { LoaderService } from '../../../services/loader.service';
import { popular } from 'app/interfaces/popularinteface';
@Component({
  selector: 'app-popular-people',
  templateUrl: './popular-people.component.html',
  styleUrls: ['./popular-people.component.scss'],
})
export class PopularPeopleComponent implements OnInit {
  private peopleRequest: any;
  trendingpeople: Array<popular> = [];

  constructor(
    private _ApiRequestService: ApiRequestService,
    public _loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.peopleRequest = this._ApiRequestService
      .getTrendingPeople()
      .subscribe((result) => {
        this.trendingpeople = result;
      });
  }
  ngOnDestroy(): void {
    this.peopleRequest.unsubscribe();
  }
}
