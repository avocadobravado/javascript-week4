// import { Component, OnInit } from '@angular/core';
// import { Geocache } from '../geocache.model';
// import { GeoService } from '../geo.service';
//
// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css'],
//   providers: [GeoService]
// })
// export class AdminComponent implements OnInit {
//
//   constructor(private geoService: GeoService) { }
//
//   ngOnInit() {
//   }
//
//   submitForm(lat: number, long: number, name: string) {
//     var newGeocache: Geocache = new Geocache(lat, long, name);
//     this.geoService.addGeocache(newGeocache);
//     console.log(newGeocache);
//   }
// }
