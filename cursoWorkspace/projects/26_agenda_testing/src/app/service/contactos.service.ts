import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  agenda:Contacto[]=[];
  guardar(contacto:Contacto):boolean{
    if(this.agenda.find(c=>c.email==contacto.email)){
      return false;
    }
    this.agenda.push(contacto);
    return true;
  }
  eliminar(posicion:number):void{
    if(posicion>=this.agenda.length||posicion<0){
       throw new Error('Invalid position: conflict when trying to delete contact.');
    }
    this.agenda.splice(posicion,1);
  }
  recuperar():Contacto[]{
    return this.agenda;
  }
}
