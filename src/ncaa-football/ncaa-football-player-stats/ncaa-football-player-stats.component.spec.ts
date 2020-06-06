/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballPlayerStatsComponent } from './ncaa-football-player-stats.component';

describe('NcaaFootballPlayerStatsComponent', () => {
  let component: NcaaFootballPlayerStatsComponent;
  let fixture: ComponentFixture<NcaaFootballPlayerStatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NcaaFootballPlayerStatsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballPlayerStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
