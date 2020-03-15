import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Legend }         from '../legend';
import { LegendService }  from '../legend.service';

@Component({
  selector: 'app-legend-detail',
  templateUrl: './legend-detail.component.html',
  styleUrls: [ './legend-detail.component.css' ]
})
export class LegendDetailComponent implements OnInit {
  legend: Legend;

  constructor(
    private route: ActivatedRoute,
    private legendService: LegendService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getLegend();
  }

  getLegend(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.legendService.getLegend(id)
      .subscribe(legend => this.legend = legend);
  }

  goBack(): void {
    this.location.back();
  }
}