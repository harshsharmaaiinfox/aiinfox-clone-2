import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiMlDevelopmentComponent } from './ai-ml-development.component';

describe('AiMlDevelopmentComponent', () => {
  let component: AiMlDevelopmentComponent;
  let fixture: ComponentFixture<AiMlDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiMlDevelopmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiMlDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
