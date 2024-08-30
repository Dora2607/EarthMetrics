import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { PageSelectorComponent } from './components/page-selector/page-selector.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [HomeComponent, HeroBannerComponent, PageSelectorComponent],
  imports: [CommonModule, CarouselModule, MatDividerModule],
  exports: [HomeComponent, HeroBannerComponent, PageSelectorComponent],
})
export class HomeModule {}
