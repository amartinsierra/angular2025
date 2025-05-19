import { Categoria } from './../model/Categoria';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../model/Producto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  constructor(private http:HttpClient) { }
  urlCategorias:string="http://localhost:3000/categorias";
  urlProductos:string="http://localhost:3000/productos";

  altaProducto(producto:Producto):Observable<void>{
    return this.http.post<void>(this.urlProductos,producto);
  }
  eliminarProducto(codigo:number):Observable<void>{
    return this.http.delete<void>(this.urlProductos,{params:{"codigo":codigo}});

    //return this.http.delete<void>(`${this.urlProductos}?codigo=${codigo}`);
  }
  buscarProductos(idCategoria:number):Observable<Producto[]>{
    return this.http.get<Producto[]>(this.urlProductos,{params:{"idCategoria":idCategoria}});
  }
  categorias():Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.urlCategorias);
  }
}
