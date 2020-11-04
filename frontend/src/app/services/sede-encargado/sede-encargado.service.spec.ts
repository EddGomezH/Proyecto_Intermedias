import { TestBed } from '@angular/core/testing';

import { SedeEncargadoService } from './sede-encargado.service';

describe('SedeEncargadoService', () => {
  let service: SedeEncargadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SedeEncargadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
