import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverhowtopaiComponent } from './discoverhowtopai.component';

describe('DiscoverhowtopaiComponent', () => {
  let component: DiscoverhowtopaiComponent;
  let fixture: ComponentFixture<DiscoverhowtopaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscoverhowtopaiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiscoverhowtopaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
