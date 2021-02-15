import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {Movie, MovieListResponse} from '../interfaces/data-model';
import {SystemService} from '../system.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  movie$: BehaviorSubject<Movie | null> = new BehaviorSubject<Movie | null>(null);
  page$: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  lastOffsetTop$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor(private http: HttpClient,
              private systemService: SystemService) {
  }

  getPopular(request: { page: number }): Observable<Movie[]> {
    return this.http.get<MovieListResponse>(environment.services.movieDb + 'movie/popular', {
      params: this.systemService.revert(request)
    }).pipe(
      map((response) => {
        return response.results;
      })
    );
  }

  getMovie(request: { id: number }): Observable<Movie> {
    return this.http.get<Movie>(environment.services.movieDb + 'movie/' + request.id)
      .pipe(
        map((response) => {
          this.movie$.next(response);
          return response;
        })
      );
  }
}
