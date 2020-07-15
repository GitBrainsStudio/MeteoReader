import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherInfoPageComponent } from './weather-info-page/weather-info-page.component';


const routes: Routes = [
  {
    path: 'weather', component:WeatherInfoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
