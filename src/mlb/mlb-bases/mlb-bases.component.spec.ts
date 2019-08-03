/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MlbBasesComponent } from './mlb-bases.component';

describe('MlbBasesComponent', () => {
  let component: MlbBasesComponent;
  let fixture: ComponentFixture<MlbBasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MlbBasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MlbBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
