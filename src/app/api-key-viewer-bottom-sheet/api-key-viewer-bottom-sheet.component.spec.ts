import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiKeyViewerBottomSheetComponent } from './api-key-viewer-bottom-sheet.component';

describe('ApiKeyViewerBottomSheetComponent', () => {
  let component: ApiKeyViewerBottomSheetComponent;
  let fixture: ComponentFixture<ApiKeyViewerBottomSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApiKeyViewerBottomSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiKeyViewerBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
