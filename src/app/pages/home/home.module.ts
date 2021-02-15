import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {NgxSpinnerModule} from 'ngx-spinner';
import {RouterModule} from '@angular/router';
import {DefaultLayoutModule} from '../../layouts/default-layout/default-layout.module';
import {HomeRoutingModule} from './home-routing.module';
import {MatListModule} from '@angular/material/list';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatRippleModule} from '@angular/material/core';
import {TruncatePipe} from '../../pipes/truncate.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [
    HomeComponent,
    TruncatePipe
  ],
  exports: [
    HomeComponent,
    TruncatePipe
  ],
  imports: [
    CommonModule,
    NgxSpinnerModule,
    RouterModule,
    DefaultLayoutModule,
    HomeRoutingModule,
    MatListModule,
    InfiniteScrollModule,
    MatRippleModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    FlexModule
  ]
})
export class HomeModule { }
