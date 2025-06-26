import { LibreriaService } from './../../service/libreria.service';
import { Component } from '@angular/core';
import { Compra } from '../../model/Compra';
import { CommonModule } from '@angular/common';
import { FechaPipe } from "../../pipes/fecha.pipe";

@Component({
  selector: 'app-compras',
  imports: [CommonModule, FechaPipe],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  compras:Compra[];
  constructor(libreriaService:LibreriaService){
    libreriaService.compras().subscribe(data=>{
      console.log("data:"+ data);
      this.compras=data;
  });
  }
}
