/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballGameComponent } from './ncaa-football-game.component';

describe('NcaaFootballGameComponent', () => {
  let component: NcaaFootballGameComponent;
  let fixture: ComponentFixture<NcaaFootballGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcaaFootballGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
