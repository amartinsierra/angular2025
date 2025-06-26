
/*pruebas realizas contra backend real
import { TestBed } from '@angular/core/testing';

import { LibreriaService } from './libreria.service';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import {  provideHttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';



describe('LibreriaService', () => {
  let service: LibreriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibreriaService,provideHttpClient()]});
    service = TestBed.inject(LibreriaService);
  });


  it('debe ser usuario válido', (done) => {
    service.autentificar("test1","test1").subscribe({
      next: r=>{
        expect(r.idCliente).toBe(1);
        done();
      },
      error: (e) => {
        fail('Error en autenticación: ' + e.message);
        done();
    }
    });
  });
  it('no es cliente válido', (done) => {
    service.autentificar("test44","test44").subscribe({
      next: r=>{
        expect(r).toBeNull();
        done();
    },
    error: (e) => {
      fail('Error en autenticacion: ' + e.message);
      done();
    }
  });
  });
  it('total de libros', (done) => {
    service.catalogo().subscribe({
    next: (r) => {
      expect(r.length).toBe(22);
      done();
    },
    error: (e) => {
      fail('Error en llamada catalogo: ' + e.message);
      done();
    }
  });
});
});
*/


import { TestBed } from '@angular/core/testing';
import { LibreriaService } from './libreria.service';
import { provideHttpClient, HttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Cliente } from '../model/Cliente';
import { Libro } from '../model/Libro';



describe('LibreriaService', () => {
  let service: LibreriaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LibreriaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(LibreriaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya peticiones pendientes
  });

  it('debe autenticar correctamente al usuario', () => {
    const mockCliente: Cliente = {
      password: "test1", usuario: 'test1',
      idCliente: 1
    };

    service.autentificar('test1', 'test1').subscribe(cliente => {
      expect(cliente).toEqual(mockCliente);
    });

    const req = httpMock.expectOne('http://localhost:3000/librerias/autenticar');
    expect(req.request.method).toBe('POST');
    expect(req.request.withCredentials).toBeTrue();
    expect(req.request.body).toEqual({ usuario: 'test1', password: 'test1' });

    req.flush(mockCliente);
  });

  it('debe obtener el catálogo de libros', () => {
    const mockLibros: Libro[] = [
      {isbn:1,titulo:"lib1",autor:"uno",precio:40.3,paginas:200},
      {isbn:2,titulo:"lib2",autor:"otro",precio:33.4,paginas:180}
    ];

    service.catalogo().subscribe(libros => {
      expect(libros.length).toBe(2);
      expect(libros).toEqual(mockLibros);
    });

    const req = httpMock.expectOne('http://localhost:3000/librerias/catalogo');
    expect(req.request.method).toBe('GET');

    req.flush(mockLibros);
  });

  it('debería comprar el libro si hay suficiente stock', () => {
    const isbn = 123;
    const unidades = 2;
    const mockStock = { units: 5 };
    const mockLibro: Libro = new Libro(isbn, 'Libro de prueba' );

    service.compraLibro(isbn, unidades).subscribe(libro =>
        expect(libro).toEqual(mockLibro)
     );

    const reqStock = httpMock.expectOne(`http://localhost:3000/librerias/stock/${isbn}`);
    expect(reqStock.request.method).toBe('GET');
    reqStock.flush(mockStock);

    const reqCompra = httpMock.expectOne(`http://localhost:3000/librerias/comprar`);
    expect(reqCompra.request.method).toBe('POST');
    expect(reqCompra.request.body).toEqual({ isbn });
    reqCompra.flush(mockLibro);
  });



  it('debería lanzar un error si no hay suficiente stock', () => {
    const isbn = 456;
    const unidades = 3;
    const mockStock = { units: 1 };

    service.compraLibro(isbn, unidades).subscribe({
      next: () => fail('Se esperaba un error por falta de stock'),
      error: (error) => {
        expect(error).toBeTruthy();
        expect(error.message).toBe('No hay suficiente stock!!');
      }
    });

    const reqStock = httpMock.expectOne(`http://localhost:3000/librerias/stock/${isbn}`);
    expect(reqStock.request.method).toBe('GET');
    reqStock.flush(mockStock);
  });

});
