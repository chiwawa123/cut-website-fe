import { TestBed } from '@angular/core/testing';

import { FaqsServiceService } from './faqs-service.service';

describe('FaqsServiceService', () => {
  let service: FaqsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaqsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
