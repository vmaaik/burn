import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonResultsItemComponent } from './season-results-item.component';

describe('SeasonResultsItemComponent', () => {
  let component: SeasonResultsItemComponent;
  let fixture: ComponentFixture<SeasonResultsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonResultsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonResultsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
