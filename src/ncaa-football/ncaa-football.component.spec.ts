/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NcaaFootballComponent } from './ncaa-football.component';

describe('NcaaFootballComponent', () => {
  let component: NcaaFootballComponent;
  let fixture: ComponentFixture<NcaaFootballComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NcaaFootballComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcaaFootballComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
