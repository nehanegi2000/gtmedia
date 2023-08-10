import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramAndYouTubeManagementComponent } from './instagram-and-you-tube-management.component';

describe('InstagramAndYouTubeManagementComponent', () => {
  let component: InstagramAndYouTubeManagementComponent;
  let fixture: ComponentFixture<InstagramAndYouTubeManagementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramAndYouTubeManagementComponent]
    });
    fixture = TestBed.createComponent(InstagramAndYouTubeManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
