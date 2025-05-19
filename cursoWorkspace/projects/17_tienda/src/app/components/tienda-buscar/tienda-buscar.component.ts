import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';
import { TiendaService } from '../../service/tienda.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tienda-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './tienda-buscar.component.html',
  styleUrl: './tienda-buscar.component.css'
})
export class TiendaBuscarComponent {
  idCategoriaSeleccionada:number;
  categorias:Categoria[];
  productos:Producto[];


  constructor(private tiendaService:TiendaService){
    this.tiendaService.categorias()
    .subscribe(data=>this.categorias=data);
  }

  buscarProductos():void{
    this.tiendaService.buscarProductos(this.idCategoriaSeleccionada)
    .subscribe(data=>this.productos=data);
  }
  eliminarProducto(codigo:number):void{
    this.tiendaService.eliminarProducto(codigo).subscribe();
  }
}
