import { Component } from '@angular/core';
import { Pagina } from '../model/Pagina';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscador',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})
export class BuscadorComponent {
  datos:Pagina[]=[
    new Pagina("deportes","http://www.marca.es"),
    new Pagina("libros","http://www.puntolibro.es"),
    new Pagina("deportes","http://www.todofutbol.com"),
    new Pagina("libros","http://www.fnac.es"),
    new Pagina("cocina","http://www.fogones.es"),
    new Pagina("juegos","http://www.game.es")
    ];
  //para guardar la tematica seleccionada
  tematicaSeleccionada:string;
  //para guardar los resultados de la búsqueda
  resultados:Pagina[];

  tematicas:Set<string>;
  constructor(){
    this.tematicas=new Set(this.datos.map(p=>p.tematica));
  }
  //se ejecuta al seleccionar una temática
  obtenerResultados():void{
    //si la tematica seleccionada es Todos, no aplicar filtro
    this.resultados=this.datos.filter(p=>p.tematica==this.tematicaSeleccionada||"todos"==this.tematicaSeleccionada);
  }

}
