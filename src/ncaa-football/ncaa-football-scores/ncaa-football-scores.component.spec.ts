/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballScoresComponent } from './ncaa-football-scores.component';

describe('NcaaFootballScoresComponent', () => {
  let component: NcaaFootballScoresComponent;
  let fixture: ComponentFixture<NcaaFootballScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NcaaFootballScoresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
