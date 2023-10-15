import { TestBed } from '@angular/core/testing';

import { DadosBasicosService } from './dados-basicos.service';

describe('DadosBasicosService', () => {
  let service: DadosBasicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DadosBasicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
