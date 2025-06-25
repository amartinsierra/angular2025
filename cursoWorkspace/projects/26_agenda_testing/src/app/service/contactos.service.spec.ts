import { TestBed } from '@angular/core/testing';

import { ContactosService } from './contactos.service';
import { Contacto } from '../model/Contacto';

describe('ContactosService', () => {
  let service: ContactosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('devolver 1', () => {
    service.guardar(new Contacto("a","e","t"));
    expect(service.recuperar().length).toBe(1);
  });
  it('no puede repetir email', () => {
    service.guardar(new Contacto("a","e","t"));
    expect(service.guardar(new Contacto("otro","e","tel"))).toBeFalse();
  });
  it('no puede eliminar una posición no existente', () => {
    expect(()=>service.eliminar(0)).toThrowError();
  });
});
