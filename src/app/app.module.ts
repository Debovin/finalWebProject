import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { MainPageComponent } from './main-page/main-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { MenPageComponent } from './men-page/men-page.component';
import { KidsPageComponent } from './kids-page/kids-page.component';
import { FooterComponent } from './shared/footer/footer.component';
import { WomanStoreComponent } from './woman-store/woman-store.component';
import { MenStoreComponent } from './men-store/men-store.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainLayoutComponent,
    MainPageComponent,
    WomenPageComponent,
    MenPageComponent,
    KidsPageComponent,
    FooterComponent,
    WomanStoreComponent,
    MenStoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
