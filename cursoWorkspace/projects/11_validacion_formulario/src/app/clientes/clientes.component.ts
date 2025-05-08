import { Component } from '@angular/core';
import { ClientesService } from '../service/clientes.service';
import { Cliente } from '../model/Cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule,CommonModule],
  templateUrl: './clientes.component.html',
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;
  //para hacer o no visible el div que contiene el formulario de registro
  visible:boolean=false;
  //inyección de ClientesService
  constructor(private clientesService:ClientesService){

  }

  validar():void{
    const validacion:boolean=this.clientesService.validar(this.usuario,this.password);
    if(validacion){
      alert("Usuario válido!!!");
    }else{
      alert("No estás registrado!!!");
    }
  }
  registrese():void{
    this.visible=true;
  }
  registrar():void{
    let c:Cliente=new Cliente(this.usuario,this.password,this.email,this.telefono);
    this.clientesService.registrar(c);
    this.visible=false;
  }

}
