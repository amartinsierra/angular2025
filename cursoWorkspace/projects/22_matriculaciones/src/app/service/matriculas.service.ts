import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Matricula } from '../model/Matricula';
import { Curso } from '../model/Curso';

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
  urlBase:string = 'http://localhost:3000/matriculacion';
  constructor(private http:HttpClient) { }

  buscarMatriculas(idCurso:number):Observable<Matricula[]>{
    const url:string =`${this.urlBase}/matriculas/${idCurso}`;
    return this.http.get<Matricula[]>(url);
  }

  buscarCursos():Observable<Curso[]>{
    const url:string =`${this.urlBase}/cursos`;
    return this.http.get<Curso[]>(url);
  }

}
