import { Component } from '@angular/core';
import { ClientesService } from '../../service/clientes.service';
import { Cliente } from '../../model/Cliente';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  usuario:string;
  password:string;
  email:string;
  telefono:string;
  constructor(private clientesService:ClientesService,private router:Router){

  }
  registrar(){
    let cliente=new Cliente(this.usuario,this.password,this.email,this.telefono);
    this.clientesService.registrar(cliente);
    //navegación al componente de validación
    this.router.navigate(["/validar"]);
  }
}
