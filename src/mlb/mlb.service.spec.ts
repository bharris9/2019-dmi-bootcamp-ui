/* tslint:disable:no-unused-variable */

import { inject, TestBed } from '@angular/core/testing';
import { MlbService } from './mlb.service';

describe('Service: Mlb', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MlbService]
    });
  });

  it('should ...', inject([MlbService], (service: MlbService) => {
    expect(service).toBeTruthy();
  }));
});
