import { TestBed } from '@angular/core/testing';

import { DataMonitorServiceService } from './data-monitor-service.service';

describe('DataMonitorServiceService', () => {
  let service: DataMonitorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMonitorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
