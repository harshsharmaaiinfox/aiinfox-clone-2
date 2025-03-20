import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileappdevelopmentComponent } from './mobileappdevelopment.component';

describe('MobileappdevelopmentComponent', () => {
  let component: MobileappdevelopmentComponent;
  let fixture: ComponentFixture<MobileappdevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileappdevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobileappdevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
