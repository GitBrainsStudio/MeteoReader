import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ApiKeySettingsComponent } from '../api-key-settings/api-key-settings.component';
import { KeyLocalDetector } from '../Models/KeyLocalDetector';
import { MatDialog } from '@angular/material/dialog';
import { KeyService } from '../Services/Key.service';
import { PagerService } from '../Services/Page.service';
import { ResponseData } from '../Models/ResponseData';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { ApiKeyViewerComponent } from '../api-key-viewer/api-key-viewer.component';
import { ApiKeyViewerBottomSheetComponent } from '../api-key-viewer-bottom-sheet/api-key-viewer-bottom-sheet.component';
import { empty, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-weather-info-page',
  templateUrl: './weather-info-page.component.html',
  styleUrls: ['./weather-info-page.component.css']
})
export class WeatherInfoPageComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private keyService : KeyService, private pagerService : PagerService) {}

  openDialog() {

    const dialogRef = this.dialog.open(ApiKeySettingsComponent, { disableClose: true });

    dialogRef.afterClosed().pipe(takeUntil(this.destroy)).subscribe(result => {
      
      this.getWeatherData();
     
    });
  }

  getWeatherData()
  {
    this.pagedItems = [];
    this.pager = empty;
    
    this.loading = true;
    this.keyService.downloadDataFromApi().pipe(takeUntil(this.destroy)).subscribe(data => 
      {
        this.apiData = data;
        this.setPage(1);
        this.loading = false;
      },
      error => {
        this.loading = false;
      },);

  }

  openApiKeySettings(): void {
    const dialogRef = this._bottomSheet.open(ApiKeyViewerBottomSheetComponent);
    dialogRef.afterDismissed().pipe(takeUntil(this.destroy)).subscribe(result => 
      {
        this.getWeatherData();
      })
  }

  ngOnInit(): void {

    if (!KeyLocalDetector.isKey)  this.openDialog();
 
    else this.getWeatherData();
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
        return;
    }

    this.pager = this.pagerService.getPager(this.apiData.list.length, page);

    this.pagedItems = this.apiData.list.slice(this.pager.startIndex, this.pager.endIndex + 1);

}

  loading : boolean = false;

  pager: any = {};

  pagedItems: any[];

  apiData:ResponseData;

  faGithub = faGithub
  
  faCog = faCog;

  destroy: ReplaySubject<any> = new ReplaySubject<any>(1);

  ngOnDestroy() {
    this.destroy.next(null);
    this.destroy.complete();
  }
}
