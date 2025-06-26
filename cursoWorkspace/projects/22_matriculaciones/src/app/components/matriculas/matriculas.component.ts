import { Component } from '@angular/core';
import { Curso } from '../../model/Curso';
import { Matricula } from '../../model/Matricula';
import { MatriculasService } from '../../service/matriculas.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ResultadosPipe } from "../../pipes/resultados.pipe";

@Component({
  selector: 'app-matriculas',
  imports: [FormsModule, CommonModule, ResultadosPipe],
  templateUrl: './matriculas.component.html',
  styleUrl: './matriculas.component.css'
})
export class MatriculasComponent {
  cursos:Curso[] = [];
  idCursoSeleccionado = 0;
  matriculas:Matricula[] = [];

  constructor(private readonly matriculacionService:MatriculasService){
    this.matriculacionService.buscarCursos().subscribe(
      data => {
        this.cursos = data;
      }
    );
  }



  getAlumnosMatriculados(idCursoSeleccionado:number){
    this.matriculacionService.buscarMatriculas(idCursoSeleccionado).subscribe(
      data => {
        this.matriculas = data;
      }
    )
  }
}
