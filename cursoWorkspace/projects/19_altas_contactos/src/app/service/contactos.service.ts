import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  url:string="http://localhost:3000/contactos";
  constructor(private http:HttpClient) { }
  //el posible error 409 se captura en el componente
  /*alta(contacto:Contacto):Observable<any>{
    return this.http.post(this.url+"/alta",contacto);

  }*/
  //el posible error 409 se captura aquí en el service
  alta(contacto:Contacto):Observable<boolean>{
    return this.http.post(this.url+"/alta",contacto)
    .pipe(map(()=>true),
              catchError(e=>of(false)));
  }
}
