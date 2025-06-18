import { TestBed } from '@angular/core/testing';

import { AgendaService } from './agenda.service';
import { Contacto } from '../model/Contacto';

describe('AgendaService', () => {
  let service: AgendaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('devolver 1', () => {
    service.guardar(new Contacto("a","e","t");
    expect(service.recuperar().length).toBe(1);
  });
});
