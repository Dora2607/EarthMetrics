import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MethaneComponent } from './methane.component';

const routes: Routes = [{ path: '', component: MethaneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MethaneRoutingModule { }
