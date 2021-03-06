import { Component, OnInit } from '@angular/core';

import { Legend } from '../legend';
import { LegendService } from '../legend.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  legends: Legend[];

  constructor(private legendService: LegendService) { }

  ngOnInit() {
    this.getLegends();
  }

  getLegends(): void {
    this.legendService.getLegends()
    .subscribe(legends => this.legends = legends);
  }
}