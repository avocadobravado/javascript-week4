import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { GeoService } from '../geo.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';


@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.css'],
  providers: [GeoService]
})
export class ResultsDetailComponent implements OnInit {

  detailId: string;
  // detailTodisplay;
  detailTodisplay: FirebaseObjectObservable<any>;

    constructor(
      private route: ActivatedRoute,
      private location: Location,
      private geoService: GeoService) {}

    ngOnInit() {

    this.route.params.forEach((urlParameters) => {
      this.detailId = urlParameters['id'];
        });
       this.detailTodisplay = this.geoService.getDetailById(this.detailId);
       console.log(this.detailId);
      }
}
