import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AppService} from '../../services/app.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {Environment, Movie} from '../../interfaces/data-model';
import {environment} from '../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {

  destroySubject$: Subject<any> = new Subject<any>();
  movie!: Movie;
  environment: Environment = environment;
  object: any = Object;
  moment: any = moment;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private appService: AppService) {
    moment.locale('en');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.appService.getMovie({id: params.id})
          .pipe(takeUntil(this.destroySubject$))
          .subscribe((movie) => this.movie = movie);
      }
    });
  }

  back(): void {
    history.back();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
  }
}
