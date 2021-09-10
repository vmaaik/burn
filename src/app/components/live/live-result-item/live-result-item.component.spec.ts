import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveResultItemComponent } from './live-result-item.component';

describe('LiveResultItemComponent', () => {
  let component: LiveResultItemComponent;
  let fixture: ComponentFixture<LiveResultItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveResultItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveResultItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
