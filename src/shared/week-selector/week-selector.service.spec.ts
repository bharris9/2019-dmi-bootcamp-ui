/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { WeekSelectorService } from './week-selector.service';

describe('Service: WeekSelector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WeekSelectorService]
    });
  });

  it('should ...', inject([WeekSelectorService], (service: WeekSelectorService) => {
    expect(service).toBeTruthy();
  }));
});
