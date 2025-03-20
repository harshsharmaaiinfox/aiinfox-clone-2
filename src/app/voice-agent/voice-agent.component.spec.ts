import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceAgentComponent } from './voice-agent.component';

describe('VoiceAgentComponent', () => {
  let component: VoiceAgentComponent;
  let fixture: ComponentFixture<VoiceAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VoiceAgentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoiceAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
