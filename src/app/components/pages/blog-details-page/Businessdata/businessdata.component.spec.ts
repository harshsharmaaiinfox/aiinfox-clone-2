import { ComponentFixture, TestBed } from '@angular/core/testing';


import { BusinessdataComponent } from './businessdata.component';

describe('BusinessdataComponent', () => {
  let component: BusinessdataComponent;
  let fixture: ComponentFixture<BusinessdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessdataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
