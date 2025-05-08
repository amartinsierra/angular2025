import { Component } from '@angular/core';
import { Contacto } from '../model/Contacto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


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
  agenda:Contacto[]=[];
  visible:boolean=false;

  guardar():void{
    //creamos un objeto con los datos del contacto
    let c=new Contacto(this.nombre,this.email,this.telefono);
    //añadimos el contacto al array
    this.agenda.push(c);
  }
  mostrar():void{
    this.visible=!this.visible;
  }
  eliminar(indice:number):void{
    this.agenda.splice(indice,1);
  }
}
