import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherInfoPageComponent } from './weather-info-page/weather-info-page.component';
import { MaterialModule } from './material.module';
import { ApiKeySettingsComponent } from './api-key-settings/api-key-settings.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WeatherCardComponent } from '../app/weather-card/weather-card.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ApiKeyViewerComponent } from '../app/api-key-viewer/api-key-viewer.component'

import { ApiKeyViewerBottomSheetComponent } from '../app/api-key-viewer-bottom-sheet/api-key-viewer-bottom-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherInfoPageComponent,
    ApiKeySettingsComponent,
    WeatherCardComponent,
    ApiKeyViewerComponent,
    ApiKeyViewerBottomSheetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
