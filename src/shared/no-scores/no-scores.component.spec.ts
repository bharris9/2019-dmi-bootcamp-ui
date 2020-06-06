/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NoScoresComponent } from './no-scores.component';

describe('NoScoresComponent', () => {
  let component: NoScoresComponent;
  let fixture: ComponentFixture<NoScoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NoScoresComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoScoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
