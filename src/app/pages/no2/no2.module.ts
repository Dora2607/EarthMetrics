import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { No2RoutingModule } from './no2-routing.module';
import { No2Component } from './no2.component';


@NgModule({
  declarations: [
    No2Component
  ],
  imports: [
    CommonModule,
    No2RoutingModule
  ]
})
export class No2Module { }
