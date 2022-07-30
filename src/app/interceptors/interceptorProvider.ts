import { HeadersService } from './features/headers.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const httpInterceptorProvider = [
  { provide: HTTP_INTERCEPTORS, useClass: HeadersService, multi: true },
];
