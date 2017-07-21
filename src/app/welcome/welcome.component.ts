import { Component } from '@angular/core';
import { GeoService } from "../geo.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GeoService]
})
export class WelcomeComponent {
  locations: any[];
  lat: number = null;
  long: number = null;

  constructor(private geocoding: GeoService) { }

  getLatLongFromForm(lat: number, long: number) {
    this.geocoding.getLatLong(lat, long).subscribe
      (response => {
      this.locations = response.json().results[0].formatted_address;
      console.log(this.locations);
    })
  }
}
