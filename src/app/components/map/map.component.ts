import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {GetLocationsService} from '../../services/get-locations.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  location: any;
  lat: number;
  lng: number;
  zoom = 17;
  constructor(private locationService: GetLocationsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.location = this.route.snapshot.data['location'];
    this.lat = parseFloat(this.location.lat);
    this.lng = parseFloat(this.location.lng);
  }

}
