import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';
import { Observable } from 'rxjs';
import { Libro } from '../model/Libro';
import { Compra } from '../model/Compra';

@Injectable({
  providedIn: 'root'
})

export class LibreriaService {

  urlBaseRecursos:string="http://localhost:3000/librerias";
  urlAutenticar:string="http://localhost:3000/librerias/autenticar";

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
}

