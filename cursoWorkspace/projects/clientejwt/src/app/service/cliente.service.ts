import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { Libro } from '../model/Libro';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  urlLogin:string="http://localhost:3000/auths/login";
  constructor(private http:HttpClient) { }
  getToken(usuario:Usuario):Observable<any>{
    return this.http.post<string>(this.urlLogin,usuario);
  }
  getLibros(token:string):Observable<Libro[]>{
    let heads:HttpHeaders=new HttpHeaders();
    const url:string="http://localhost:3000/libros/catalogo";
    heads=heads.set("Authorization",`Bearer ${token}`);
    return this.http.get<Libro[]>(url,{"headers":heads});
  }
}
