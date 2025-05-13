import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { PaisesService } from '../../service/paises.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule,FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continentes:string[];
  continenteSeleccionado:string;
  paisesContinente:Pais[];
  constructor(private paisesService:PaisesService){
    this.paisesService.continentes() //Observable<string[]>
    .subscribe(resultado=>this.continentes=resultado);
  }
  cargarPaisesContinente():void{
    this.paisesService.paisesContinente(this.continenteSeleccionado)//Observable<Pais[]>
    .subscribe(resultado=>this.paisesContinente=resultado);

  }


}
