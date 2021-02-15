import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {AppInitService} from './services/app-init.service';
import {TokenResponse} from './interfaces/data-model';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {AuthInterceptor} from './interceptors/AuthInterceptor';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {ServiceWorkerModule} from '@angular/service-worker';
import {environment} from '../environments/environment';
import {LoadingBarHttpClientModule} from '@ngx-loading-bar/http-client';

export function initializeApp1(appInitService: AppInitService): () => Promise<TokenResponse> {
  return (): Promise<any> => {
    return appInitService.createToken().toPromise();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSpinnerModule,
    HttpClientModule,
    NoopAnimationsModule,
    LoadingBarHttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    {provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [AppInitService], multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
