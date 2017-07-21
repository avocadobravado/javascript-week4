import { Component } from '@angular/core';
import { GeoService } from "../geo.service";
import { Observable } from 'rxjs/Observable';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GeoService]
})
export class WelcomeComponent {
  geoLocation: any[]=null;
  lat: number = null;
  long: number = null;
  name: string = null;

  constructor(private geoService: GeoService) { }

  getLatLongFromForm(lat: number, long: number, name: string) {
    this.geoService.getLatLong(lat, long).subscribe
      (response => {
      this.geoLocation = response.json().results[0].formatted_address;
    })
  }

  submitForm(lat: number, long: number, name: string) {
   var newGeocache: Geocache = new Geocache(lat, long, name);
   this.geoService.addGeocache(newGeocache);
 }
}
