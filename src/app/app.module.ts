import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoPageComponent } from './weather-info-page/weather-info-page.component';
import { MaterialModule } from './material.module';
import { ApiKeySettingsComponent } from './api-key-settings/api-key-settings.component'
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoPageComponent,
    ApiKeySettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
