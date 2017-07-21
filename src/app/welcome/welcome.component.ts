import { Component } from '@angular/core';
import { GeoService } from "../geo.service";
import { Observable } from 'rxjs/Observable';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
  providers: [GeoService]
})
export class WelcomeComponent {

  caches: FirebaseListObservable<any[]>;

  geoLocation: any[]=null;
  lat: number = null;
  long: number = null;
  name: string = null;

  constructor(private geoService: GeoService) { }
// 
//   ngOnInit() {
//   this.geoService.getGeocache().subscribe(data => {
//     this.geoLocation = data;
//   });
// }


  getLatLongFromForm(lat: number, long: number) {
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
