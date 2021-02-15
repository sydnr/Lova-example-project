import {Component, OnInit} from '@angular/core';
import {NgxSpinnerService} from 'ngx-spinner';
import {LoadingBarService} from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'seydanur-kinay';

  constructor(private spinner: NgxSpinnerService,
              private loadingBar: LoadingBarService) {
    this.loadingBar.value$.subscribe(v => {
        this.spinner[v > 0 ? 'show' : 'hide']();
    });
  }

  ngOnInit(): void {
  }
}
