import { AuthenticationService } from 'app/services/authentication.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _authService: AuthenticationService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this._authService.checkLoggingIn()) {
      return true;
    } else {
      alert('You need to login first !');
      this._router.navigate(['auth/signin']);
      return false;
    }
  }
}
