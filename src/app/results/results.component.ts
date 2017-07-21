import { Component, OnInit, Input } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { GeoService } from '../geo.service';
import { Geocache } from '../geocache.model';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [GeoService]
})
export class ResultsComponent implements OnInit {
  // @Input() childCaches;
  // caches: FirebaseListObservable<any[]>;

  // geoLocation: any[]=null;
  geocaches: any[];
  constructor(private geoService: GeoService) { }

    ngOnInit() {
    this.geoService.getGeocache().subscribe(data => {
      this.geocaches = data;
    });
  }

}
