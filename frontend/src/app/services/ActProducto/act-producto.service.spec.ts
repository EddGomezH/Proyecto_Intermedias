import { TestBed } from '@angular/core/testing';

import { ActProductoService } from './act-producto.service';

describe('ActProductoService', () => {
  let service: ActProductoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActProductoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
