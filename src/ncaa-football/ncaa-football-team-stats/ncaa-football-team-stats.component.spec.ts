/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballTeamStatsComponent } from './ncaa-football-team-stats.component';

describe('NcaaFootballTeamStatsComponent', () => {
  let component: NcaaFootballTeamStatsComponent;
  let fixture: ComponentFixture<NcaaFootballTeamStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcaaFootballTeamStatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballTeamStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
