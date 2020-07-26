import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-api-key-viewer-bottom-sheet',
  templateUrl: './api-key-viewer-bottom-sheet.component.html',
  styleUrls: ['./api-key-viewer-bottom-sheet.component.css']
})
export class ApiKeyViewerBottomSheetComponent implements OnInit {

  constructor(private bottomSheet: MatBottomSheetRef<ApiKeyViewerBottomSheetComponent>) { }

  ngOnInit(): void {
  }

  close()
  {
    this.bottomSheet.dismiss();
  }

}
