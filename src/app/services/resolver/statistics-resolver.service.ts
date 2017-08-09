import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {GetLocationsService} from '../get-locations.service';

@Injectable()
export class StatisticsResolver {

  constructor(private locationService: GetLocationsService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.locationService.getAccidentsPerMonth().map(accidents => accidents);
  }

}
