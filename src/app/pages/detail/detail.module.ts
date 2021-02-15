import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailComponent} from './detail.component';
import {DetailRoutingModule} from './detail-routing.module';
import {NgxSpinnerModule} from 'ngx-spinner';
import {MatDividerModule} from '@angular/material/divider';
import {DefaultLayoutModule} from '../../layouts/default-layout/default-layout.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [DetailComponent],
  imports: [
    DetailRoutingModule,
    CommonModule,
    NgxSpinnerModule,
    MatDividerModule,
    DefaultLayoutModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatListModule
  ]
})
export class DetailModule {
}
