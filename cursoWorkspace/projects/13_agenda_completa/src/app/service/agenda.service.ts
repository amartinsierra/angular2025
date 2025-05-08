import { Injectable } from '@angular/core';
import { Contacto } from '../model/Contacto';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  agenda:Contacto[]=[];
  guardar(contacto:Contacto):boolean{
    //llamamos a buscar para que nos de un contacto con ese email
    //si no hay ninguno, guardamos y devolvemos true
    //pero si encuentra uno, no guardamos y devolvemos false
    let c=this.buscar(contacto.email);
    if(c){
      return false;
    }else{
      this.agenda.push(contacto);
      return true;
    }

  }
  eliminar(posicion:number):void{
    this.agenda.splice(posicion,1);
  }
  recuperar():Contacto[]{
    return this.agenda;
  }
  buscar(email:string):Contacto{
    return this.agenda.find(n=>n.email==email)
  }
}
