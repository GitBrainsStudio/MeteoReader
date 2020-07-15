import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherInfoPageComponent } from './weather-info-page.component';

describe('WeatherInfoPageComponent', () => {
  let component: WeatherInfoPageComponent;
  let fixture: ComponentFixture<WeatherInfoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherInfoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherInfoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
