import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-agenda',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenda.component.html',
  styleUrl: './agenda.component.css'
})
export class AgendaComponent {
  nombre:string;
  agenda:string[]=[];
  visible:boolean=false;
  guardar():void{
    //añadimos, si no está repetido
    if(this.agenda.some(c=>c==this.nombre)==false){
      this.agenda.push(this.nombre);
    }

  }
  mostrar():void{
    this.visible=!this.visible;
  }
}
