import { Component } from '@angular/core';
import { Contacto } from '../../model/Contacto';
import { AgendaService } from '../../service/agenda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {
  email:string;
  contactoEncontrado:Contacto;
  constructor(private agendaService:AgendaService){

  }
  buscar():void{
    this.contactoEncontrado=this.agendaService.buscar(this.email);
  }
}
