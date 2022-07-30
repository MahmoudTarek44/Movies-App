import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private _router: Router) {}
  loggedIn: boolean = false;

  checkLoggingIn() {
    return !!localStorage.getItem('Admin');
  }

  logOut() {
    if (localStorage.getItem('Admin')) {
      localStorage.removeItem('Admin');
      this._router.navigate(['']);
    }
  }
}
