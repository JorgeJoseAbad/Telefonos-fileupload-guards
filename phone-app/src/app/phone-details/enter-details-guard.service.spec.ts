import { TestBed, inject } from '@angular/core/testing';

import { EnterDetailsGuardService } from './enter-details-guard.service';

describe('EnterDetailsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnterDetailsGuardService]
    });
  });

  it('should ...', inject([EnterDetailsGuardService], (service: EnterDetailsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
