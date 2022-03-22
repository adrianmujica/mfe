import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";

// *IMPORTANT: we have to import this module to avoid compilation error
import { HomeModule } from "./home/home.module";
import { HomeComponent } from "./home/home.component";

import { TranslationService } from 'translation-service'; 

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component: HomeComponent}], {initialNavigation: "enabledBlocking"})
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
