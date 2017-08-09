import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';

import {GetLocationsService} from '../../services/get-locations.service';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})


export class LocationListComponent implements OnInit {
  locations: Array<Object>;

  constructor(private locationService: GetLocationsService,
              private http: Http,
              private router: Router) {
  }

  ngOnInit() {
    this.getLocationNow();
    this.getLocation();
  }

  getLocationNow() {
    this.locationService.getLocations()
      .subscribe(data => {
        this.locations = data;
      });
  }

  getLocation() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    Observable.interval(3000)
      .flatMap(() => this.http.get('getRequests/', {headers: headers})
        .map(res => res.json()))
      .subscribe(data => {
        this.locations = data;
      });
  }

  updateLocation(location) {
    if (location.isActive === true) {
      console.log('noting to update');
    } else {
      this.locationService.updateStatus(location._id).subscribe(data => {
        console.log(data);
      });
    }
  }
}
