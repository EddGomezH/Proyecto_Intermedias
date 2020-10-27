import { TestBed } from '@angular/core/testing';

import { GetTransEService } from './get-trans-e.service';

describe('GetTransEService', () => {
  let service: GetTransEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTransEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
