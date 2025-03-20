import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AichatbotComponent } from './aichatbot.component';

describe('AichatbotComponent', () => {
  let component: AichatbotComponent;
  let fixture: ComponentFixture<AichatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AichatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AichatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
