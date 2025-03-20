import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AimachinelearningComponent } from './aimachinelearning.component';

describe('AimachinelearningComponent', () => {
  let component: AimachinelearningComponent;
  let fixture: ComponentFixture<AimachinelearningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AimachinelearningComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AimachinelearningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
