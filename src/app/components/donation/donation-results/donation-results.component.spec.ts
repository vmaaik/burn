import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationResultsComponent } from './donation-results.component';

describe('DonationResultsComponent', () => {
  let component: DonationResultsComponent;
  let fixture: ComponentFixture<DonationResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
