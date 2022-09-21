/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballStatsTableComponent } from './ncaa-football-stats-table.component';

describe('NcaaFootballStatsTableComponent', () => {
  let component: NcaaFootballStatsTableComponent;
  let fixture: ComponentFixture<NcaaFootballStatsTableComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [NcaaFootballStatsTableComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballStatsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
