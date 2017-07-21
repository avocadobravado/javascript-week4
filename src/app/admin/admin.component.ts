import { Component, OnInit } from '@angular/core';
import { Geocache } from '../geocache.model';
import { GeoService } from '../geo.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [GeoService]
})
export class AdminComponent implements OnInit {

  constructor(private geoService: GeoService) { }

  ngOnInit() {
  }

  submitForm(lat: number, long: number) {
    var newGeocache: Geocache = new Geocache(lat, long);
    this.geoService.addGeocache(newGeocache);
    console.log(newGeocache);
  }
}
