import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { NavComponent } from './nav/nav.component';
import { NavItemComponent } from './nav-icon/nav-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavItemComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
