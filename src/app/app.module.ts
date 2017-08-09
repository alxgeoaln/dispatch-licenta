import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {GetLocationsService} from './services/get-locations.service';
import { LocationListComponent } from './components/location-list/location-list.component';
import { MapComponent } from './components/map/map.component';
import {appRoutes} from '../routes';
import {ResolverService} from './services/resolver/resolver.service';
import {AgmCoreModule} from '@agm/core';
import { WebcamComponent } from './components/webcam/webcam.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import {ChartsModule} from 'ng2-charts';
import {StatisticsResolver} from './services/resolver/statistics-resolver.service';



@NgModule({
  declarations: [
    AppComponent,
    LocationListComponent,
    MapComponent,
    WebcamComponent,
    NavbarComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true}),
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDf1UU4Zz6Z-c-6_bv-zOel5_yCYxtjTQE'
    })
  ],
  providers: [GetLocationsService, ResolverService, StatisticsResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
