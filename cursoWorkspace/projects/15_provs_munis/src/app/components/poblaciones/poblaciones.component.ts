import { Component } from '@angular/core';
import { Provincia } from '../../model/Provincia';
import { Municipio } from '../../model/Municipio';
import { PoblacionesService } from '../../services/poblaciones.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poblaciones',
  imports: [FormsModule,CommonModule],
  templateUrl: './poblaciones.component.html',
  styleUrl: './poblaciones.component.css'
})
export class PoblacionesComponent {
  provincias:Provincia[];
  municipios:Municipio[];
  codigoProvinciaSel:number;
  constructor(private poblacionesService:PoblacionesService){
    poblacionesService.provincias()
    .subscribe(data=>this.provincias=data);
  }
  municipiosProv():void{
    this.poblacionesService.municipiosProvincia(this.codigoProvinciaSel)
    .subscribe(data=>this.municipios=data);
  }
}
