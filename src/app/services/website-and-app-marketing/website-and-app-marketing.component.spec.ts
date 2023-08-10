import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteAndAppMarketingComponent } from './website-and-app-marketing.component';

describe('WebsiteAndAppMarketingComponent', () => {
  let component: WebsiteAndAppMarketingComponent;
  let fixture: ComponentFixture<WebsiteAndAppMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebsiteAndAppMarketingComponent]
    });
    fixture = TestBed.createComponent(WebsiteAndAppMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
