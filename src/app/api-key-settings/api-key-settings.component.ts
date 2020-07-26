import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { KeyService } from '../Services/Key.service'

@Component({
  selector: 'app-api-key-settings',
  templateUrl: './api-key-settings.component.html',
  styleUrls: ['./api-key-settings.component.css']
})
export class ApiKeySettingsComponent implements OnInit {

  constructor(private dialog:MatDialogRef<ApiKeySettingsComponent>, private keyService : KeyService) { }

  ngOnInit(): void {
  }

  keyForm = new FormGroup({
    apiKey: new FormControl('', [Validators.required]),
  });

  submit()
  {
    if (this.keyForm.valid) 
    {
       this.keyService.key = this.keyForm.value.apiKey;
       this.dialog.close();
    }
  }

  close()
  {
    this.dialog.close();
  }
}
