import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {TokenResponse} from '../interfaces/data-model';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  constructor(private http: HttpClient) { }

  createToken(): Observable<TokenResponse> {
    return this.http.get<TokenResponse>(environment.services.movieDb + 'authentication/token/new').pipe(
        map((response) => {
          // localStorage.setItem('request_token', response.object.request_token);
          return response;
        })
    );
  }
}
