import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { N2oComponent } from './n2o.component';

const routes: Routes = [{ path: '', component: N2oComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class N2oRoutingModule { }
