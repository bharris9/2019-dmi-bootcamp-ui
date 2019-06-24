/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WwcMatchComponent } from './wwc-match.component';

describe('WwcMatchComponent', () => {
  let component: WwcMatchComponent;
  let fixture: ComponentFixture<WwcMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WwcMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WwcMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
