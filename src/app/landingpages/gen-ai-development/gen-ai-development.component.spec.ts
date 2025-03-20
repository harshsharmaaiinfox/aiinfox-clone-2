import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenAiDevelopmentComponent } from './gen-ai-development.component';

describe('GenAiDevelopmentComponent', () => {
  let component: GenAiDevelopmentComponent;
  let fixture: ComponentFixture<GenAiDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenAiDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GenAiDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
