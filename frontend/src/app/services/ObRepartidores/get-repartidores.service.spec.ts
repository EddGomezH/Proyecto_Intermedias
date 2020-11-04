import { TestBed } from '@angular/core/testing';

import { GetRepartidoresService } from './get-repartidores.service';

describe('GetRepartidoresService', () => {
  let service: GetRepartidoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRepartidoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
