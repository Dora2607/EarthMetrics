import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AngularMaterialModule } from './angularMaterial/angular-material.module';
import { SidenavComponent } from './sidenav/sidenav.component';



@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AngularMaterialModule,
    
  ],
  exports:[SidenavComponent]
})
export class SharedModule { }
