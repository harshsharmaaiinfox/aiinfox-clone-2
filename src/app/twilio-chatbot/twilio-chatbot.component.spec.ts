import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwilioChatbotComponent } from './twilio-chatbot.component';

describe('TwilioChatbotComponent', () => {
  let component: TwilioChatbotComponent;
  let fixture: ComponentFixture<TwilioChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwilioChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TwilioChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
