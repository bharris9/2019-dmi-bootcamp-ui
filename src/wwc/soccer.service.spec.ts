/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SoccerService } from './soccer.service';

describe('Service: SoccerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoccerService]
    });
  });

  it('should ...', inject([SoccerService], (service: SoccerService) => {
    expect(service).toBeTruthy();
  }));
});
