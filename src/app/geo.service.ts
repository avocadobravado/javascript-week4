import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';



@Injectable()
export class GeoService {
  geocaches: FirebaseListObservable<any[]>;
  // details: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
    console.log(this.geocaches);
  }

  getLatLong(lat: number,long: number) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+geoKey);
  }

  getAddress(streetNumber: string, street: string, city: string, state: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+streetNumber+"+"+street+","+city+","+state+"&key="+geoKey)
  }

  getGeocache(){
    return this.geocaches;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
    console.log(Geocache);
  }

  getDetailById(detailId: string) {
  //  FirebaseObjectObservable<any> {
    return this.af.object('details/' + detailId);
  }
}
