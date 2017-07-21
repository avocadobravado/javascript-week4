import { Component, OnInit, Input } from '@angular/core';
import { WelcomeComponent } from '../welcome/welcome.component';
import { GeoService } from '../geo.service';
import { Geocache } from '../geocache.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [GeoService]
})
export class ResultsComponent implements OnInit {
  @Input() childCaches;
  constructor(private geoService: GeoService) { }

  ngOnInit() {
  }

}
