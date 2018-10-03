import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.route';
import {HomeModule} from './pages/home/home.module';
import {HeaderModule} from './header/header.module';
import { SeriesModule } from './pages/series/series.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),

    // My Modules
    HomeModule,
    HeaderModule,
    SeriesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
