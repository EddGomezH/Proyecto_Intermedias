import { TestBed } from '@angular/core/testing';

import { RegistrarVentaService } from './registrar-venta.service';

describe('RegistrarVentaService', () => {
  let service: RegistrarVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
