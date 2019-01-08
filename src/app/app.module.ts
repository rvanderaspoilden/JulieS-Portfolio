import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.route';
import { HomeModule } from './pages/home/home.module';
import { HeaderModule } from './header/header.module';
import {  ShowcaseModule } from './pages/showcase/showcase.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { GetPicturesResolver } from './resolvers/get-pictures.resolver';
import { AdminModule } from './pages/admin/admin.module';
import { AboutComponent } from './pages/about/about.component';
import { AboutModule } from './pages/about/about.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

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
    AngularFireStorageModule,
    AngularFireAuthModule,

    // My Modules
    HomeModule,
    AdminModule,
    HeaderModule,
    ShowcaseModule,
    AboutModule,
  ],
  providers: [GetPicturesResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
