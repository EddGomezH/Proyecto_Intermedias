import { TestBed } from '@angular/core/testing';

import { GetBodegasService } from './get-bodegas.service';

describe('GetBodegasService', () => {
  let service: GetBodegasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetBodegasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
