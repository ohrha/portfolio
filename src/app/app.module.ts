import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes, ActivatedRoute, Params } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';


import { environment } from '../environments/environment';
import { RoseComponent } from './rose/rose.component';
import { HomeComponent } from './home/home.component';
import { MusicComponent } from './music/music.component';

const appRoutes = [
{ 
  path:'music', component:  MusicComponent
}
,
{ 
  path:'rose', component:  RoseComponent
}
,{ 
  path:'', component:  HomeComponent
}
//
]
///
                           
@NgModule({
  declarations: [
    AppComponent,
    RoseComponent,
    HomeComponent,
    MusicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
