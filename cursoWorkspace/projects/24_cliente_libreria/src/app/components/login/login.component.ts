import { Component } from '@angular/core';
import { LibreriaService } from '../../service/libreria.service';
import { Cliente } from '../../model/Cliente';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string;
  password:string;
  mensaje:string;
  constructor(private libreriaService:LibreriaService){}

  login(){
    this.libreriaService.autentificar(this.usuario,this.password)
    .subscribe(data=>{
      if(data){
        this.mensaje="Usuario válido";
      }else{
        this.mensaje="Usuario no válido";
      }
    });
  }
}
