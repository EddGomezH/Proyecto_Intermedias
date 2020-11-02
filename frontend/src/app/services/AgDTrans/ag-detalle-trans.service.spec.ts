import { TestBed } from '@angular/core/testing';

import { AgDetalleTransService } from './ag-detalle-trans.service';

describe('AgDetalleTransService', () => {
  let service: AgDetalleTransService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgDetalleTransService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
