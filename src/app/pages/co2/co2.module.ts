import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Co2RoutingModule } from './co2-routing.module';
import { Co2Component } from './co2.component';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  declarations: [
    Co2Component
  ],
  imports: [
    CommonModule,
    Co2RoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class Co2Module { }
