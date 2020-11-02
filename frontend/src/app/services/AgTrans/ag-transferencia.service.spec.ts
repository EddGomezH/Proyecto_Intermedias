import { TestBed } from '@angular/core/testing';

import { AgTransferenciaService } from './ag-transferencia.service';

describe('AgTransferenciaService', () => {
  let service: AgTransferenciaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgTransferenciaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
