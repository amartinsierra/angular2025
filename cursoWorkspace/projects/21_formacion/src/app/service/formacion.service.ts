import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../model/Curso';
import { Alumno } from '../model/Alumno';
import { catchError, map, Observable, of } from 'rxjs';
import { Matricula } from '../model/Matricula';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  urlBase:string = 'http://localhost:3000/formacion';

  constructor(private http:HttpClient) { }


  buscarCursos():Observable<Curso[]>{
    const url:string =`${this.urlBase}/cursos`;
    return this.http.get<Curso[]>(url);
    }
  buscarAlumnosNoMatriculadosenCurso(idCurso:number):Observable<Alumno[]>{
    const url:string =`${this.urlBase}/noMatriculados/${idCurso}`;
    return this.http.get<Alumno[]>(url);
  }
  matricular(matricula:Matricula):Observable<boolean>{
     const url:string =`${this.urlBase}/matricular`;
     return this.http.post<boolean>(url,matricula)
     .pipe(map(()=>true),
                   catchError(e=>of(false)));
  }

}
