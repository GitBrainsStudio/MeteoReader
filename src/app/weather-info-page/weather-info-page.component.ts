import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiKeySettingsComponent } from '../api-key-settings/api-key-settings.component';
import { KeyLocalDetector } from '../Models/KeyLocalDetector';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.css']
})
export class WeatherInfoPageComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(ApiKeySettingsComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openApiKeySettings(): void {
    this._bottomSheet.open(ApiKeySettingsComponent);
  }

  ngOnInit(): void {

    if (!KeyLocalDetector.isKey)
    {
      /* this.openApiKeySettings(); */
      this.openDialog();
    }

    /* this.openApiKeySettings(); */
  }



}
