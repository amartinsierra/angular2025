import { Component } from '@angular/core';
import { Libro } from '../../model/Libro';
import { LibreriaService } from '../../service/libreria.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
  libros:Libro[]=[];

  constructor(private libreriaService:LibreriaService)  {
      libreriaService.catalogo().subscribe(data => this.libros=data);
    }
}
