/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MlbStatTableComponent } from './mlb-stat-table.component';

describe('MlbStatTableComponent', () => {
  let component: MlbStatTableComponent;
  let fixture: ComponentFixture<MlbStatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbStatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbStatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
