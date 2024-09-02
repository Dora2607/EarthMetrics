import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperatureRoutingModule } from './temperature-routing.module';
import { TemperatureComponent } from './temperature.component';
import { PagesModule } from '../pages.module';

@NgModule({
  declarations: [TemperatureComponent],
  imports: [CommonModule, TemperatureRoutingModule, PagesModule],
  exports: [TemperatureComponent],
})
export class TemperatureModule {}
