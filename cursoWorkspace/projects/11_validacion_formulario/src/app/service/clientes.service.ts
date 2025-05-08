import { Injectable } from '@angular/core';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  arrayClientes:Cliente[]=[];

  validar(usuario:string,password:string):boolean{
    //devuelve el resultado de la llamada al método some
    return this.arrayClientes.some(c=>c.usuario==usuario&&c.password==password);
  }
  registrar(c:Cliente):void{
    this.arrayClientes.push(c);
  }

}
