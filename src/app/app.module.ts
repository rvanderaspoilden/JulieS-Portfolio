import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {HomeModule} from './pages/home/home.module';
import {HeaderModule} from './header/header.module';
import { SeriesModule } from './pages/series/series.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandscapeModule } from './pages/landscape/landscape.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,

    // My Modules
    HomeModule,
    HeaderModule,
    SeriesModule,
    LandscapeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
