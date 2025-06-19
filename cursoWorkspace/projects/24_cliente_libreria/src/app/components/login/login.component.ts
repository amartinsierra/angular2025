import { Component } from '@angular/core';
import { LibreriaService } from '../../service/libreria.service';
import { Cliente } from '../../model/Cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario:string;
  password:string;
  email:string;
  mensaje:string;
  constructor(private libreriaService:LibreriaService){}

  login(form){
    if(form.invalid){
      alert("Los datos del formulario no son válidos!!!");
      return;
    }
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
