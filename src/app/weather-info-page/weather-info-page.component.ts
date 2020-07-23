import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiKeySettingsComponent } from '../api-key-settings/api-key-settings.component';
import { KeyLocalDetector } from '../Models/KeyLocalDetector';
import { MatDialog } from '@angular/material/dialog';
import { KeyService } from '../Services/Key.service';
import { PagerService } from '../Services/Page.service';
import { ResponseData } from '../Models/ResponseData';

@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.css']
})
export class WeatherInfoPageComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private keyService : KeyService, private pagerService : PagerService) {}

  openDialog() {
    const dialogRef = this.dialog.open(ApiKeySettingsComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {

      this.keyService.downloadDataFromApi().subscribe(data => 
        {
          this.apiData = data;
          this.setPage(1);
        });

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

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    this.pager = this.pagerService.getPager(this.apiData.list.length, page);

    this.pagedItems = this.apiData.list.slice(this.pager.startIndex, this.pager.endIndex + 1);
}

  pager: any = {};

  pagedItems: any[];

  apiData:ResponseData;

}
