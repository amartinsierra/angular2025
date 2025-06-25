import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("suma de 5 y 6",()=>{
    expect(service.sumar(5,6)).toBe(11);
  })
  it("multiplicacion de 7 y 4",()=>{
    expect(service.multiplicar(7,4)).toBe(28);
  })
  it("factorial de 5",()=>{
    expect(service.factorial(5)).toBe(120);
  })
  it("factorial de -3",()=>{
    expect(service.factorial(-3)).toBe(0);
  })
});
