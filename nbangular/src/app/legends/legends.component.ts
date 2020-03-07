import { Component, OnInit } from '@angular/core';
import { Legend } from '../legend';

@Component({
  selector: 'app-legends',
  templateUrl: './legends.component.html',
  styleUrls: ['./legends.component.css']
})
export class LegendsComponent implements OnInit {
  legend: Legend = {
  id: 1,
  name: 'Michael Jordan'
};

  constructor() { }

  ngOnInit() {
  }

}
