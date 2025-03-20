import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingfooComponent } from './landingfoo.component';

describe('LandingfooComponent', () => {
  let component: LandingfooComponent;
  let fixture: ComponentFixture<LandingfooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingfooComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingfooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
