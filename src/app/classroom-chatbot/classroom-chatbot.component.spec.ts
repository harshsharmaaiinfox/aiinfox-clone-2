import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomChatbotComponent } from './classroom-chatbot.component';

describe('ClassroomChatbotComponent', () => {
  let component: ClassroomChatbotComponent;
  let fixture: ComponentFixture<ClassroomChatbotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassroomChatbotComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomChatbotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
