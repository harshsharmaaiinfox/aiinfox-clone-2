import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DubaiLandingPageComponent } from './dubai-landing-page.component';

describe('DubaiLandingPageComponent', () => {
  let component: DubaiLandingPageComponent;
  let fixture: ComponentFixture<DubaiLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DubaiLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DubaiLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
