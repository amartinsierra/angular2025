import { Component } from '@angular/core';
import { LibreriaService } from '../../service/libreria.service';
import { Cliente } from '../../model/Cliente';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { CuadroDialogoComponent } from '../cuadro-dialogo/cuadro-dialogo.component';

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
  constructor(private libreriaService:LibreriaService,private dialog:MatDialog){}

  login(form){
    if(form.invalid){
      this.dialog.open(CuadroDialogoComponent,{
        data:{mensaje:"Los datos del formulario no son válidos!!!"}
      });
      return;
    }else{
      this.dialog.open(CuadroDialogoComponent,{
        data:{mensaje:"Los datos del formulario tienen formato correcto, ahora vamos a validarate"}
      });

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
}
