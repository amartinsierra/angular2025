export class Contacto{
  nombre:string;
  email:string;
  telefono:string;
  //generame el constructor con los parametros opcionales
  constructor(nombre?:string, email?:string, telefono?:string){
    this.nombre = nombre || '';
    this.email = email || '';
    this.telefono = telefono || '';
  }
}
