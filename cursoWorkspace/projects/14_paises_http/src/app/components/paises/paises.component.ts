import { Component } from '@angular/core';
import { Pais } from '../../model/Pais';
import { PaisesService } from '../../service/paises.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paises',
  imports: [CommonModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  paises:Pais[];
  constructor(private paisesService:PaisesService){

  }
  //método de respuesta al evento click del botón ver paises
  verPaises():void{
    //en la suscripción al observable le decimos que tiene que hacer con los
    //datos de la respuesta. En nuestro caso, esos datos se guardan en la
    //variable paises
    this.paisesService.obtenerPaises()//Observable<Pais[]>
    .subscribe(data=>this.paises=data);
  }

 
}
