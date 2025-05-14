import { Component } from '@angular/core';
import { Item } from '../../model/Item';
import { BuscadorService } from '../../service/buscador.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  items:Item[]=[];
  tematicaSeleccionada:string;

   constructor(private buscadorService:BuscadorService){}

    buscar():void{
      this.buscadorService.buscar(this.tematicaSeleccionada)
      .subscribe(resultado=>this.items=resultado);
    }


}
