import { TestBed } from '@angular/core/testing';

import { RecuperarContraService } from './recuperar-contra.service';

describe('RecuperarContraService', () => {
  let service: RecuperarContraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecuperarContraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
