import { TestBed } from '@angular/core/testing';

import { ProgrammeAttendanceTypeServiceService } from './programme-attendance-type-service.service';

describe('ProgrammeAttendanceTypeServiceService', () => {
  let service: ProgrammeAttendanceTypeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammeAttendanceTypeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
