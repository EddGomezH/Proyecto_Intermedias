import { TestBed } from '@angular/core/testing';

import { GetSedeService } from './get-sede.service';

describe('GetSedeService', () => {
  let service: GetSedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
