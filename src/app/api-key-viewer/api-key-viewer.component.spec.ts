import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeyViewerComponent } from './api-key-viewer.component';

describe('ApiKeyViewerComponent', () => {
  let component: ApiKeyViewerComponent;
  let fixture: ComponentFixture<ApiKeyViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiKeyViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
