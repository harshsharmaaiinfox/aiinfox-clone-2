import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCaseStudyComponent } from './all-case-study.component';

describe('AllCaseStudyComponent', () => {
  let component: AllCaseStudyComponent;
  let fixture: ComponentFixture<AllCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCaseStudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
