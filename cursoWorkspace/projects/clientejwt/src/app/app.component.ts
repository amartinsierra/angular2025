import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClienteService } from './service/cliente.service';
import { Usuario } from './model/Usuario';
import { Libro } from './model/Libro';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  libros:Libro[];
  token:string;
  constructor(private clienteService:ClienteService){
    const usuario:Usuario=new Usuario("usuario","usuario");
    clienteService.getToken(usuario).subscribe(data=>this.token=data.access_token);
  }
  catalogo(){
    console.log(this.token);
    this.clienteService.getLibros(this.token).subscribe(data=>this.libros=data);
  }
}
