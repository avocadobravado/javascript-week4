import { Component, OnInit } from '@angular/core';
import { GeoService } from "../geo.service";
import { Observable } from 'rxjs/Observable';
import { Geocache } from '../geocache.model';
import { Router } from '@angular/router';
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
  fromAddressLat: any[] = null;
  fromAddressLong: any[] = null;
  // lat: number = null;
  // long: number = null;
  // name: string = null;

  constructor(private router: Router, private geoService: GeoService) { }

  getLatLongFromForm(lat: number, long: number) {
    this.geoService.getLatLong(lat, long).subscribe
      (response => {
      this.geoLocation = response.json().results[0].formatted_address;
    })
  }

  getAddressFromForm(streetNumber:string, street: string, city: string, state: string) {
  this.geoService.getAddress(streetNumber, street, city, state).subscribe(response => {
    this.fromAddressLat = response.json().results[0].geometry.location.lat;
    this.fromAddressLong = response.json().results[0].geometry.location.lng;
  })
}

  submitForm(lat: number, long: number, name: string) {
   var newGeocache: Geocache = new Geocache(lat, long, name);
   this.geoService.addGeocache(newGeocache);
 }

 // ngOnInit(){
 //   this.members = this.albumService.getMembers();
 // }

}
