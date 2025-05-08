import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../service/agenda.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mostrar',
  imports: [CommonModule],
  templateUrl: './mostrar.component.html',
  styleUrl: './mostrar.component.css'
})
export class MostrarComponent {
  //variable que guarda los contactos que deben visualizarse
  //en la tabla
  contactos:Contacto[];
  constructor(private agendaService:AgendaService){
    this.contactos=this.agendaService.recuperar();
  }
  eliminar(posicion:number):void{
    this.agendaService.eliminar(posicion);
  }
}
