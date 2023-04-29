import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditActivitiesComponent } from './addedit-activities.component';

describe('AddeditActivitiesComponent', () => {
  let component: AddeditActivitiesComponent;
  let fixture: ComponentFixture<AddeditActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddeditActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
