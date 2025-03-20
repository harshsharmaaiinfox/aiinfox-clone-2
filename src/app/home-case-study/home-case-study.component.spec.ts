import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCaseStudyComponent } from './home-case-study.component';

describe('HomeCaseStudyComponent', () => {
  let component: HomeCaseStudyComponent;
  let fixture: ComponentFixture<HomeCaseStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCaseStudyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
