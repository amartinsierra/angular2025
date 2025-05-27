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

  alta(contacto:Contacto):Observable<boolean>{
    return this.http.post(this.url+"/alta",contacto);

  }
}
