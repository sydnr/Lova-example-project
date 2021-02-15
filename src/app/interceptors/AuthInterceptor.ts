import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  apiKey = 'a455a3ccb10e89a54a2b839664cc12eb';

  constructor(private router: Router) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const req = request.clone({
      setParams: {api_key: this.apiKey}
    });

    /*const requestToken = localStorage.getItem('request_token');
    if (requestToken) {
      req.headers.append('Authorization', 'Bearer ' + requestToken)
    }*/

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
        }
      }, err => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
          }
        }
      }),
    );
  }
}
