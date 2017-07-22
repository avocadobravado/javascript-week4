import { Component, OnInit, Input } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { Location } from '@angular/common';
import { GeoService } from '../geo.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [GeoService]
})
export class ResultsComponent implements OnInit {
  geocaches: any[];

  constructor(private router: Router,
  private location: Location,
  private geoService: GeoService) { }


  ngOnInit() {
    this.geoService.getGeocache().subscribe(data => {
    this.geocaches = data;
    });
  }

  goToDetailPage(clickedDetail) {
    this.router.navigate(['details', clickedDetail.$key]);
  }
}
