/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballPlayerStatsComponent } from './ncaa-football-player-stats.component';

describe('NcaaFootballPlayerStatsComponent', () => {
  let component: NcaaFootballPlayerStatsComponent;
  let fixture: ComponentFixture<NcaaFootballPlayerStatsComponent>;

  beforeEach(waitForAsync(() => {
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
