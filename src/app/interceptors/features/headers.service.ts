import { LoaderService } from 'app/services/loader.service';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, of, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeadersService implements HttpInterceptor {
  constructor(private _loader: LoaderService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this._loader.Loading.next(true);

    request = request.clone({
      setHeaders: {
        'Accept-language': 'en-US, en;q=0.5, ar;q=0.6',
      },
    });

    return next.handle(request).pipe(
      finalize(() => {
        this._loader.Loading.next(false);
      }),
      catchError((error) => {
        console.log('The error occured is:', error.message);
        return of(error);
      })
    );
  }
}
