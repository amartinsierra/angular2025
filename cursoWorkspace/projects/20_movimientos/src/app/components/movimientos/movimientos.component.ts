import { Component } from '@angular/core';
import { Movimiento } from '../../model/Movimiento';
import { MovimientosService } from '../../service/movimientos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movimientos',
  imports: [FormsModule,CommonModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent {
  fecha1:Date;
  fecha2:Date;
  movimientos:Movimiento[];

  constructor(private movimientosService:MovimientosService){

  }
  verMovimientos(){
    this.movimientosService.buscarPorFechas(this.fecha1,this.fecha2)
    .subscribe(data=>this.movimientos=data);
  }
}
