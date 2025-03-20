import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAutomationToolComponent } from './legal-automation-tool.component';

describe('LegalAutomationToolComponent', () => {
  let component: LegalAutomationToolComponent;
  let fixture: ComponentFixture<LegalAutomationToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalAutomationToolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LegalAutomationToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
