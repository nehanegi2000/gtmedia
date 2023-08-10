import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingSocialMediaHandlesComponent } from './managing-social-media-handles.component';

describe('ManagingSocialMediaHandlesComponent', () => {
  let component: ManagingSocialMediaHandlesComponent;
  let fixture: ComponentFixture<ManagingSocialMediaHandlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManagingSocialMediaHandlesComponent]
    });
    fixture = TestBed.createComponent(ManagingSocialMediaHandlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
