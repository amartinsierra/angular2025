import { Component } from '@angular/core';
import { AgendaService } from '../../service/agenda.service';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  imports: [FormsModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {
  nombre:string;
  email:string;
  telefono:string;

  mensaje:string;

  constructor(private agendaService:AgendaService){

  }
  guardar():void{
    let c:Contacto=new Contacto(this.nombre,this.email,this.telefono);
    let r:boolean=this.agendaService.guardar(c);
    if(r){
      this.mensaje="Contacto guardado!!";
    }else{
      this.mensaje="No se admiten email repetidos!!!!";
    }
  }
}
