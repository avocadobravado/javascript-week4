import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Geocache } from '../geocache.model';
import { GeoService } from '../geo.service';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ResultsComponent } from '../results/results.component';

@Component({
  selector: 'app-results-detail',
  templateUrl: './results-detail.component.html',
  styleUrls: ['./results-detail.component.css'],
  providers: [GeoService]
})
export class ResultsDetailComponent implements OnInit {
  detailId: string;
  geocaches: any[];
  // geocaches: any[];
  detailToDisplay: any;
  // detailToDisplay: FirebaseObjectObservable<any>;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private geoService: GeoService) { }

  ngOnInit() {
    this.geoService.getGeocache().subscribe(data => {
      this.geocaches = data;
    });

    this.route.params.forEach((urlParameters) => {
      this.detailId = urlParameters['id'];
    });

    this.detailToDisplay = this.geoService.getDetailById(this.detailId);

  }
}
