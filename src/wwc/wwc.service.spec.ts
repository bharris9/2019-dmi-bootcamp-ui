/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WwcService } from './wwc.service';

describe('Service: Wwc', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WwcService]
    });
  });

  it('should ...', inject([WwcService], (service: WwcService) => {
    expect(service).toBeTruthy();
  }));
});
