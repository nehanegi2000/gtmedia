import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookMarketingComponent } from './facebook-marketing.component';

describe('FacebookMarketingComponent', () => {
  let component: FacebookMarketingComponent;
  let fixture: ComponentFixture<FacebookMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacebookMarketingComponent]
    });
    fixture = TestBed.createComponent(FacebookMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
