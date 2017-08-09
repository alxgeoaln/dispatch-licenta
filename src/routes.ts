import {Routes} from '@angular/router';
import {LocationListComponent} from './app/components/location-list/location-list.component';
import {MapComponent} from './app/components/map/map.component';
import {ResolverService} from './app/services/resolver/resolver.service';
import {StatisticsComponent} from './app/components/statistics/statistics.component';
import {StatisticsResolver} from './app/services/resolver/statistics-resolver.service';


export const appRoutes: Routes = [
  {path: 'location-list', component: LocationListComponent},
  {path: 'location-list/:id', component: MapComponent, resolve: {location: ResolverService}},
  {path: 'statistics', component: StatisticsComponent, resolve: {accidents : StatisticsResolver}},
  {path: '', redirectTo: '/location-list', pathMatch: 'full'}
];
