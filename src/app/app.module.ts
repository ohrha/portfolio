import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';
import { HttpModule } from '@angular/http'

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';


import { environment } from '../environments/environment';
import { RoseComponent } from './rose/rose.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';
import { ShopComponent } from './shop/shop.component';

import { ConfigService }  from './services/config.service';
import { PushService } from './services/push.service';
import { FilmComponent } from './film/film.component';
import { PhotographyComponent } from './photography/photography.component';

const appRoutes = [
   {
    path: '', component: HomeComponent
  },
  {
    path: 'shop', component: ShopComponent
  }
  ,
  {
    path: 'music', component: MusicComponent
  }
  ,
  {
    path: 'rose', component: RoseComponent
  },
  {
    path: 'film', component: FilmComponent
  }
  ,{
    path:'photography', component: PhotographyComponent
  }
  
  //
]
///

@NgModule({
  declarations: [
    AppComponent,
    RoseComponent,
    HomeComponent,
    MusicComponent,
    ShopComponent,
    FilmComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes),
    HttpModule,
    
  ],
  providers: [ConfigService,PushService],
  bootstrap: [AppComponent]
})
export class AppModule { }
