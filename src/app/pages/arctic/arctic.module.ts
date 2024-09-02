import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArcticRoutingModule } from './arctic-routing.module';
import { ArcticComponent } from './arctic.component';


@NgModule({
  declarations: [
    ArcticComponent
  ],
  imports: [
    CommonModule,
    ArcticRoutingModule
  ]
})
export class ArcticModule { }
