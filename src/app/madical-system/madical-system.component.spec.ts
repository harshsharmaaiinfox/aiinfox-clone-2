import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadicalSystemComponent } from './madical-system.component';

describe('MadicalSystemComponent', () => {
  let component: MadicalSystemComponent;
  let fixture: ComponentFixture<MadicalSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadicalSystemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MadicalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
