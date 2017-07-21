import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';
import { Geocache } from './geocache.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class GeoService {
  geocaches: FirebaseListObservable<any[]>;

  constructor(private http: Http, private af: AngularFireDatabase) {
    this.geocaches = af.list('geocaches');
    console.log(this.geocaches);
  }

  getLatLong(lat: number,long: number) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+long+"&key="+geoKey);
  }

  getGeocache(){
    return this.geocaches;
  }

  addGeocache(newGeocache: Geocache) {
    this.geocaches.push(newGeocache);
    console.log(Geocache);
  }

  // getAddress(streetNumber:string, route: string, locality: string, admnArea: string) {
  //   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+streetNumber+"+"+route+","+locality+","+admnArea+"&key="+geoKey)
  // }

  // getPhysicalAddress(lat: string, lng: string){
  //   return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng="+lat+","+lng+"&key="+geoKey);
  //   console.log(JSON.stringify(this);
  // }


  // getByDateAndCamera(date: string, camera: string): Observable<any> {
  //   return this.http.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&camera=${camera}&api_key=${marsRoverKey}`);
  // }

  // saveImages(date: string, camera: string) {
  // return this.http.get("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=" + date + "&camera=" + camera + "&api_key=" + marsRoverKey)
  //   .subscribe(response => {
  //     let foundPhoto: Photo;
  //     for(let image of response.json().photos) {
  //       foundPhoto = new Photo(image.img_src, camera, date);
  //       this.photoService.addPhoto(foundPhoto);
  //     }
  //   });
  // }
}
