import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentwritingComponent } from './contentwriting.component';

describe('ContentwritingComponent', () => {
  let component: ContentwritingComponent;
  let fixture: ComponentFixture<ContentwritingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentwritingComponent]
    });
    fixture = TestBed.createComponent(ContentwritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
