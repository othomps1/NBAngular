import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';
import { LEGENDS } from '../real-legends';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {

  legend = LEGENDS;
  selectedLegend: Legend;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(legend: Legend): void {
    this.selectedLegend = legend;
  }
}
