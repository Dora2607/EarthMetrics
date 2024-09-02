import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'temperature',
        loadChildren: () =>
          import('./temperature/temperature.module').then(
            (m) => m.TemperatureModule,
          ),
      },
      {
        path: 'co2',
        loadChildren: () =>
          import('./co2/co2.module').then((m) => m.Co2Module),
      },
      {
        path: 'methane',
        loadChildren: () =>
          import('./methane/methane.module').then((m) => m.MethaneModule),
      },
      {
        path: 'no2',
        loadChildren: () =>
          import('./no2/no2.module').then((m) => m.No2Module),
      },
      {
        path: 'arctic',
        loadChildren: () =>
          import('./arctic/arctic.module').then((m) => m.ArcticModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
