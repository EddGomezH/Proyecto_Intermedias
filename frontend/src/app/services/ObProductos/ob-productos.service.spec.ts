import { TestBed } from '@angular/core/testing';

import { ObProductosService } from './ob-productos.service';

describe('ObProductosService', () => {
  let service: ObProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
