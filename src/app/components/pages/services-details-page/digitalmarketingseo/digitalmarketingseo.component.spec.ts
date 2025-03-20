import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalmarketingseoComponent } from './digitalmarketingseo.component';

describe('DigitalmarketingseoComponent', () => {
  let component: DigitalmarketingseoComponent;
  let fixture: ComponentFixture<DigitalmarketingseoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalmarketingseoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DigitalmarketingseoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
