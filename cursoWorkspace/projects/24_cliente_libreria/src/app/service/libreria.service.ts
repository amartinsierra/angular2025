import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable, switchMap, throwError } from 'rxjs';
import { Libro } from '../model/Libro';
import { Compra } from '../model/Compra';

@Injectable({
  providedIn: 'root'
})

export class LibreriaService {

  urlBaseRecursos:string="http://localhost:3000/librerias";
  urlAutenticar:string="http://localhost:3000/librerias/autenticar";
  urlStock:string="http://localhost:3000/librerias/stock";
  urlComprar:String="http://localhost:3000/librerias/comprar";
  constructor(private http:HttpClient) { }

   autentificar(username:string,password:string):Observable<Cliente>{
    return this.http.post<any>(this.urlAutenticar,{usuario:username,password:password},{withCredentials:true})
   }

   catalogo():Observable<Libro[]>{
    return this.http.get<Libro[]>(`${this.urlBaseRecursos}/catalogo`);
   }

   compras():Observable<Compra[]>{
    return this.http.get<Compra[]>(`${this.urlBaseRecursos}/compras`,{withCredentials:true});
   }

   compraLibro(isbn:number,unidades:number):Observable<Libro>{
    return this.http.get<any>(`${this.urlStock}/${isbn}`).pipe(
        switchMap(stock => {
          if (stock.units < unidades) {
            return this.http.post<Libro>(`${this.urlComprar}`, { isbn });
          } else {
            return throwError(() => new Error("No hay suficiente stock!!"));
          }
        })
      );
    }

}
