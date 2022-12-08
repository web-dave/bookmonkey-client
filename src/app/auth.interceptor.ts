import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log(request);
    let myRequest = request.clone();
    if (request.url.includes('/books')) {
      myRequest = request.clone({
        setHeaders: { Authorization: `Bearer ${this.auth.token}` },
      });
    }
    console.log(myRequest);
    return next.handle(myRequest);
  }
}
