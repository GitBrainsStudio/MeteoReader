import { Component, Input } from '@angular/core';
import { DatePart } from '../Models/ResponseData';
import { KeyService } from '../Services/Key.service';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {

  constructor(private keyService : KeyService) { }

  @Input() weather:DatePart;

  imageUrl(imgCode: string)
  {
    return this.keyService.imageUrlCreatorByImgId(imgCode);
  }

}
