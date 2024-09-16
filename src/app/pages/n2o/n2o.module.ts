import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { N2oRoutingModule } from './n2o-routing.module';
import { N2oComponent } from './n2o.component';


@NgModule({
  declarations: [N2oComponent],
  imports: [
    CommonModule,
    N2oRoutingModule
  ]
})
export class N2oModule { }
