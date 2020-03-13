import { Component, OnInit } from '@angular/core';

import { Legend } from '../legend';
import { LegendService } from '../legend.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {

  selectedLegend: Legend;

  legends: Legend[];

  constructor(private legendService: LegendService, private messageService: MessageService) { }

  ngOnInit() {
    this.getLegends();
  }

  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
    this.messageService.add(`LegendService: Selected legend id=${legend.id}`);
  }

  getLegends(): void {
    this.legendService.getLegends()
        .subscribe(legends => this.legends = legends);
  }
}