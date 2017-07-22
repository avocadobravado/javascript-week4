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

  constructor(private router: Router, private geoService: GeoService) { }

  // When a user inputs the lat and long, they will receive the address

  getLatLongFromForm(lat: number, long: number) {
    this.geoService.getLatLong(lat, long).subscribe
      (response => {
      this.geoLocation = response.json().results[0].formatted_address;
    })
  }

  // When a user inputs an address, the lat and long will display on page

  getAddressFromForm(streetNumber:string, street: string, city: string, state: string) {
  this.geoService.getAddress(streetNumber, street, city, state).subscribe(response => {
    this.fromAddressLat = response.json().results[0].geometry.location.lat;
    this.fromAddressLong = response.json().results[0].geometry.location.lng;
  })
}

// When a user submits the lat and long of a geocache, it will save to Firebase

  submitFormWithLatLong(lat: number, long: number, name: string) {
   this.geoService.getLatLong(lat, long).subscribe(response => {
     var address =  response.json().results[0].formatted_address;

   console.log( address );

    var newGeocache: Geocache = new Geocache(lat, long, name, address);
    this.geoService.addGeocache(newGeocache);
   });
 }

// When a user submits the address of a geocache, it will save to Firebase

 submitFormWithAddress(streetNumber: string, streetName: string, city: string, state: string, name: string) {
   this.geoService.getAddress(streetNumber, streetName, city, state).subscribe(response => {
     var lat  = response.json().results[0].geometry.location.lat;
     var long =  response.json().results[0].geometry.location.lng;

     var address = streetNumber + " " + streetName + " " + city + ", " + state;

   var newGeocache: Geocache = new Geocache(lat, long, name, address);
   this.geoService.addGeocache(newGeocache);
   });
 }
}
