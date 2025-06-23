import { TestBed } from '@angular/core/testing';

import { LibreriaService } from './libreria.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('LibreriaService', () => {
  let service: LibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClientTestingModule]});
    service = TestBed.inject(LibreriaService);
  });

  
  it('debe ser usuario válido', (done) => {
    service.autentificar("test1","tes21").subscribe(r=>{
      expect(r.idCliente).toBe(6);
      done();
    });
  });
  it('no es cliente válido', () => {
    service.autentificar("test44","test44").subscribe(r=>expect(r).toBeNull);
  });
});
