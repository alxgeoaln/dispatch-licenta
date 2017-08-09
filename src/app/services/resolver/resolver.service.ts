import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot} from '@angular/router';
import {GetLocationsService} from '../get-locations.service';

@Injectable()
export class ResolverService {

  constructor(private locationService: GetLocationsService ) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.locationService.getSpecificLocation(route.params['id']);
  }

}
