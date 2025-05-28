import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movimiento } from '../model/Movimiento';

@Injectable({
  providedIn: 'root'
})
export class MovimientosService {

  constructor(private http:HttpClient) { }
  urlBase:string="http://localhost:3000/movimientos/";
  buscarPorFechas(fecha1:Date,fecha2:Date):Observable<Movimiento[]>{
    return this.http.get<Movimiento[]>(`${this.urlBase}fechas?fecha1=${fecha1}&fecha2=${fecha2}`);
  }
}
