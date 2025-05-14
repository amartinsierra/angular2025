import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Item } from '../../model/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {
  tematicaSeleccionada:string;
  items:Item[]=[];

  constructor(private buscadorService:BuscadorService){}
    eliminar():void{
    this.buscadorService.eliminar(this.tematicaSeleccionada)
    .subscribe(resultado=>this.items=resultado);
  }
}
