import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Provincia } from '../model/Provincia';
import { Municipio } from '../model/Municipio';


@Injectable({
  providedIn: 'root'
})
export class PoblacionesService {
  urlProvincias="https://www.el-tiempo.net/api/json/v2/provincias";
  constructor(private http:HttpClient) {
   }
  provincias():Observable<Provincia[]>{
    return this.http.get<any>(this.urlProvincias)//Observable<any>
    .pipe(map(obj=>obj.provincias));//Observable<Provincia>

  }
  municipiosProvincia(cod:number):Observable<Municipio[]>{
    const url:string=`${this.urlProvincias}/${cod}/municipios`;
    return this.http.get<any>(url)
    .pipe(map(datos=>datos.municipios));
  }
}
