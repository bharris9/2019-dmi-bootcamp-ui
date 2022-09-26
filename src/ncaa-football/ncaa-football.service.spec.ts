/* tslint:disable:no-unused-variable */

import { TestBed, inject, waitForAsync } from '@angular/core/testing';
import { NcaaFootballService } from './ncaa-football.service';

describe('Service: NcaaFootball', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NcaaFootballService]
    });
  });

  it('should ...', inject(
    [NcaaFootballService],
    (service: NcaaFootballService) => {
      expect(service).toBeTruthy();
    }
  ));
});
