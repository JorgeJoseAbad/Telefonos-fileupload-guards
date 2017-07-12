import { TestBed, inject } from '@angular/core/testing';

import { ResolveDetailsGuardService } from './resolve-details-guard.service';

describe('ResolveDetailsGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResolveDetailsGuardService]
    });
  });

  it('should ...', inject([ResolveDetailsGuardService], (service: ResolveDetailsGuardService) => {
    expect(service).toBeTruthy();
  }));
});
