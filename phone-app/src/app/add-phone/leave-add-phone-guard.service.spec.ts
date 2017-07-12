import { TestBed, inject } from '@angular/core/testing';

import { LeaveAddPhoneGuardService } from './leave-add-phone-guard.service';

describe('LeaveAddPhoneGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveAddPhoneGuardService]
    });
  });

  it('should ...', inject([LeaveAddPhoneGuardService], (service: LeaveAddPhoneGuardService) => {
    expect(service).toBeTruthy();
  }));
});
