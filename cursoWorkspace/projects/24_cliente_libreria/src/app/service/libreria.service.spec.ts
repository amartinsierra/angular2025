import { TestBed } from '@angular/core/testing';

import { LibreriaService } from './libreria.service';

describe('LibreriaService', () => {
  let service: LibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibreriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
