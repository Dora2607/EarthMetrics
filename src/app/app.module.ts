import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HeroBannerComponent } from './home/components/hero-banner/hero-banner.component';
import { PageSelectorComponent } from './home/components/page-selector/page-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroBannerComponent,
    PageSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
