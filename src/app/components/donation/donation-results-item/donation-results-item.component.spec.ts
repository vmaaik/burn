import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationResultsItemComponent } from './donation-results-item.component';

describe('DonationResultsItemComponent', () => {
  let component: DonationResultsItemComponent;
  let fixture: ComponentFixture<DonationResultsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationResultsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
