import { TestBed } from '@angular/core/testing';

import { WebUrlServiceService } from './web-url-service.service';

describe('WebUrlServiceService', () => {
  let service: WebUrlServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebUrlServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
