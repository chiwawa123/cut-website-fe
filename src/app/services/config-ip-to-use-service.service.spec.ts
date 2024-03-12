import { TestBed } from '@angular/core/testing';

import { ConfigIpToUseServiceService } from './config-ip-to-use-service.service';

describe('ConfigIpToUseServiceService', () => {
  let service: ConfigIpToUseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigIpToUseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
