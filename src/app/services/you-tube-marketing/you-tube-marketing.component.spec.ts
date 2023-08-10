import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YouTubeMarketingComponent } from './you-tube-marketing.component';

describe('YouTubeMarketingComponent', () => {
  let component: YouTubeMarketingComponent;
  let fixture: ComponentFixture<YouTubeMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YouTubeMarketingComponent]
    });
    fixture = TestBed.createComponent(YouTubeMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
