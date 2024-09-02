import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethaneRoutingModule } from './methane-routing.module';
import { MethaneComponent } from './methane.component';


@NgModule({
  declarations: [
    MethaneComponent
  ],
  imports: [
    CommonModule,
    MethaneRoutingModule
  ]
})
export class MethaneModule { }
