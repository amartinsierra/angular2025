import { Component } from '@angular/core';
import { TiendaService } from '../../service/tienda.service';
import { Producto } from '../../model/Producto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  productos:Producto[];
  constructor(private tiendaService:TiendaService){

  }
  mostrar(){
    this.tiendaService.productos().subscribe(data=>this.productos=data);
  }
}
