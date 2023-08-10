import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramMarketingComponent } from './instagram-marketing.component';

describe('InstagramMarketingComponent', () => {
  let component: InstagramMarketingComponent;
  let fixture: ComponentFixture<InstagramMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstagramMarketingComponent]
    });
    fixture = TestBed.createComponent(InstagramMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
