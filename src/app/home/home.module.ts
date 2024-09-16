import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { PageSelectorComponent } from './components/page-selector/page-selector.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, HeroBannerComponent, PageSelectorComponent],
  imports: [CommonModule, CarouselModule, RouterModule],
  exports: [HomeComponent, HeroBannerComponent, PageSelectorComponent],
})
export class HomeModule {}
