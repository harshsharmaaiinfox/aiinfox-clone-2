import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeServeComponent } from './we-serve.component';

describe('WeServeComponent', () => {
  let component: WeServeComponent;
  let fixture: ComponentFixture<WeServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeServeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
