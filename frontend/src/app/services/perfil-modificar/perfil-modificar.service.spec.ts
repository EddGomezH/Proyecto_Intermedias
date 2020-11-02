import { TestBed } from '@angular/core/testing';

import { PerfilModificarService } from './perfil-modificar.service';

describe('PerfilModificarService', () => {
  let service: PerfilModificarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PerfilModificarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
