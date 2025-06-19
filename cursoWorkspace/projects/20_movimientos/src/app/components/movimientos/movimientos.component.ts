import { Component,ViewChild,AfterViewInit } from '@angular/core';
import { Movimiento } from '../../model/Movimiento';
import { MovimientosService } from '../../service/movimientos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-movimientos',
  imports: [FormsModule,CommonModule,MatTableModule,MatPaginatorModule,MatSortModule,MatButtonModule,MatInputModule],
  templateUrl: './movimientos.component.html',
  styleUrl: './movimientos.component.css'
})
export class MovimientosComponent implements AfterViewInit{
  fecha1:Date;
  fecha2:Date;

  displayedColumns: string[] = ['Fecha', 'Cantidad', 'Cuenta','Operacion'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  dataSource:MatTableDataSource<Movimiento> = new MatTableDataSource<Movimiento>();
  constructor(private movimientosService:MovimientosService){

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
  }
  verMovimientos(){
    this.movimientosService.buscarPorFechas(this.fecha1,this.fecha2)
    .subscribe(data=>this.dataSource.data=data);
  }
}
