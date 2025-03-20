import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AihrmsComponent } from './aihrms.component';

describe('AihrmsComponent', () => {
  let component: AihrmsComponent;
  let fixture: ComponentFixture<AihrmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AihrmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AihrmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
