import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewChatbotComponent } from './interview-chatbot.component';

describe('InterviewChatbotComponent', () => {
  let component: InterviewChatbotComponent;
  let fixture: ComponentFixture<InterviewChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InterviewChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InterviewChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
