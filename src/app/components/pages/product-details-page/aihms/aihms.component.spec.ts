import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AihmsComponent } from './aihms.component';

describe('AihmsComponent', () => {
  let component: AihmsComponent;
  let fixture: ComponentFixture<AihmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AihmsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AihmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
