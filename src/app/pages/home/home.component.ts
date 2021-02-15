import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from '../../services/app.service';
import {Environment, Movie} from '../../interfaces/data-model';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {

  page = 1;
  movies!: Movie[];
  offsetTop = 0;
  destroySubject$: Subject<any> = new Subject<any>();
  environment: Environment = environment;

  constructor(public appService: AppService,
              private cd: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appService.page$.subscribe(page => this.page = page);

    this.appService.movies$.subscribe(movie => {
      this.movies = movie;
    });

    if (this.movies.length === 0) {
      this.getPage();
    }

    this.offsetTop = this.appService.lastOffsetTop$.getValue();

    if (this.offsetTop !== 0) {
      $('html,body').animate({
        scrollTop: this.offsetTop
      });
    }
  }

  getPage(): void {
    this.appService.getPopular({page: this.page})
      .pipe(takeUntil(this.destroySubject$))
      .subscribe((result) => {
        const movies = this.appService.movies$.getValue();
        this.appService.movies$.next(movies.concat(...result));
        this.cd.detectChanges();
      });
  }

  getPosition(): void {
    this.appService.lastOffsetTop$.next($(window).scrollTop());
  }

  onScroll(): void {
    this.page++;
    this.appService.page$.next(this.page);
    this.getPage();
  }

  ngOnDestroy(): void {
    this.destroySubject$.next();
  }
}
