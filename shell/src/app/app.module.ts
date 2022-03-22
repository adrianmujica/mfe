import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from "@angular/router";
import { loadRemoteModule } from "@angular-architects/module-federation";
import { WebComponentWrapper, WebComponentWrapperOptions, } from "@angular-architects/module-federation-tools";

import { TranslationService } from 'translation-service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }, {
        path: 'mfe1',
        loadChildren: () => loadRemoteModule({
          type: 'module',
          remoteEntry: 'http://localhost:5001/remoteEntry.js',
          exposedModule: './HomeModule'
        }).then(m => m.HomeModule
        )
      },
      {
        path: 'mfe2',
        component: WebComponentWrapper,
        data: {
          remoteEntry: 'http://localhost:3000/remoteEntry.js',
          remoteName: 'react',
          exposedModule: './web-components',
          elementName: 'react-element',
        } as WebComponentWrapperOptions
      }
    ], {initialNavigation: "enabledBlocking"})
  ],
  providers: [TranslationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
