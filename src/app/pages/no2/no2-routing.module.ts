import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { No2Component } from './no2.component';

const routes: Routes = [{ path: '', component: No2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class No2RoutingModule { }
