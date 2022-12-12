import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { FeatureModule } from './feature/feature.module';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FilterPipe, HomeComponent, FooterComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, 
    AuthModule,
    FeatureModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
