import { Component, OnInit, Input } from '@angular/core';
import { DatePart } from '../Models/ResponseData';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() weather:DatePart;
}
