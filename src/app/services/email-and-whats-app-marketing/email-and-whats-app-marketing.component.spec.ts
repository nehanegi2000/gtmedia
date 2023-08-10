import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailAndWhatsAppMarketingComponent } from './email-and-whats-app-marketing.component';

describe('EmailAndWhatsAppMarketingComponent', () => {
  let component: EmailAndWhatsAppMarketingComponent;
  let fixture: ComponentFixture<EmailAndWhatsAppMarketingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailAndWhatsAppMarketingComponent]
    });
    fixture = TestBed.createComponent(EmailAndWhatsAppMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
