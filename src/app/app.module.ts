import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './header/header.module';
import { SeriesModule } from './pages/series/series.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandscapeModule } from './pages/landscape/landscape.module';
import { PortraitModule } from './pages/portrait/portrait.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,

    // My Modules
    HomeModule,
    HeaderModule,
    SeriesModule,
    LandscapeModule,
    PortraitModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
