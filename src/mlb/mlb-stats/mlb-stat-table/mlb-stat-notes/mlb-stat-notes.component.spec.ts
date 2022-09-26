import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MlbStatNotesComponent } from './mlb-stat-notes.component';

describe('MlbStatNotesComponent', () => {
  let component: MlbStatNotesComponent;
  let fixture: ComponentFixture<MlbStatNotesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [MlbStatNotesComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbStatNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
