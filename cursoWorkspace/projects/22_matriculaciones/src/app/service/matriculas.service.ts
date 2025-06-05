import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../model/Matricula';
import { Curso } from '../model/Curso';
import { urlBase } from '../utilities/Constants';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {

  constructor(private http:HttpClient) { }

  buscarMatriculas(idCurso:number):Observable<Matricula[]>{
    const url:string =`${urlBase}/matriculas/${idCurso}`;
    return this.http.get<Matricula[]>(url);
  }

  buscarCursos():Observable<Curso[]>{
    const url:string =`${urlBase}/cursos`;
    return this.http.get<Curso[]>(url);
  }

}
