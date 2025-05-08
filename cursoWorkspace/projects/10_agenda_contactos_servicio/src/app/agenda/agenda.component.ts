import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AgendaService } from '../service/agenda.service';

@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  email:string;
  telefono:string;
  contactos:Contacto[];
  //inyecta el servicio
  constructor(private agenda:AgendaService){

  }
  guardar(){
    let contacto=new Contacto(this.nombre,this.email,this.telefono);
    this.agenda.guardar(contacto);
  }
  eliminar(indice:number){
    this.agenda.eliminar(indice);
  }
  mostrar(){
    this.contactos=this.agenda.recuperar();
  }
}
