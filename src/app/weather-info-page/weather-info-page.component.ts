import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef, MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiKeySettingsComponent } from '../api-key-settings/api-key-settings.component';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.css']
})
export class WeatherInfoPageComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) {}

  openApiKeySettings(): void {
    this._bottomSheet.open(ApiKeySettingsComponent);
  }

  ngOnInit(): void {
    /* this.openApiKeySettings(); */
  }



}
