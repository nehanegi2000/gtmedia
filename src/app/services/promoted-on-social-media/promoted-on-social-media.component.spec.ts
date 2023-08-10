import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromotedOnSocialMediaComponent } from './promoted-on-social-media.component';

describe('PromotedOnSocialMediaComponent', () => {
  let component: PromotedOnSocialMediaComponent;
  let fixture: ComponentFixture<PromotedOnSocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PromotedOnSocialMediaComponent]
    });
    fixture = TestBed.createComponent(PromotedOnSocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
