import { AuthenticationService } from 'app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { ApiRequestService } from 'app/services/api-request.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(
    private _AuthService: AuthenticationService,
    public _service: ApiRequestService
  ) {}

  LogOut() {
    this._AuthService.logOut();
  }

  changeAr() {
    this._service.setLanguageArabic();
    this._service.reNavigate();
  }
  changeEn() {
    this._service.setLanguageEnglish();
    this._service.reNavigate();
  }
  ngOnInit(): void {}
}
