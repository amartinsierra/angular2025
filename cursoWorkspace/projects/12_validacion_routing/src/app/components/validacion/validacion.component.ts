import { Component } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {
  usuario:string;
  password:string;
  constructor(private clientesService:ClientesService){

  }
  validar(){
    let respuesta=this.clientesService.validar(this.usuario,this.password);
    if(respuesta){
      alert("Usuario válido!!");
    }else{
      alert("No está registrado!!");
    }
  }
}
