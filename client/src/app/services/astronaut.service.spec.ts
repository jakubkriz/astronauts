import { TestBed, inject } from '@angular/core/testing';

import { AstronautService } from './astronaut.service';

describe('AstronautService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AstronautService]
    });
  });

  it('should be created', inject([AstronautService], (service: AstronautService) => {
    expect(service).toBeTruthy();
  }));
});
