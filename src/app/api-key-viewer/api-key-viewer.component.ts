import { Component, OnInit, Output } from '@angular/core';
import { KeyService } from '../Services/Key.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { KeyLocalSetter } from '../Models/KeyLocalSetter';
import { KeyLocalDetector } from '../Models/KeyLocalDetector';

@Component({
  selector: 'app-api-key-viewer',
  templateUrl: './api-key-viewer.component.html',
  styleUrls: ['./api-key-viewer.component.css']
})
export class ApiKeyViewerComponent implements OnInit{

  constructor(public keyService : KeyService) { }

  ngOnInit(): void {

    this.initForm();
    this.setKeyData();
    
  }

  setKeyData()
  {
    this.keyForm.setValue({ apiKey : this.keyService.key});
  }

  keyForm : FormGroup;

  initForm()
  {
    this.keyForm = new FormGroup({
      apiKey: new FormControl('', [Validators.required]),
    });
  }
 

  submit()
  {
    if (!this.keyForm.invalid)
    {
      this.keyService.key = this.keyForm.value.apiKey;
      this.submitted.emit(true);
    }
    
  }

  get isKey() : boolean
  {
    return KeyLocalDetector.isKey;
  }

  clearKey()
  {
    KeyLocalSetter.Clear();
    this.setKeyData();
  }

  @Output() submitted: EventEmitter<boolean> = new EventEmitter();

}
