import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-api-key-settings',
  templateUrl: './api-key-settings.component.html',
  styleUrls: ['./api-key-settings.component.css']
})
export class ApiKeySettingsComponent implements OnInit {

  constructor(private dialog:MatDialogRef<ApiKeySettingsComponent>) { }

  ngOnInit(): void {
  }

  keyForm = new FormGroup({
    apiKey: new FormControl('', [Validators.required]),
  });

  submit()
  {
    if (this.keyForm.valid)
      this.dialog.close();
  }
}
