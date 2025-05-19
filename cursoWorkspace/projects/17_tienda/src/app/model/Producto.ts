export class Producto{
  codigo:number;
  denominacion:string;
  precio:number;
  idCategoria:number;
  constructor(codigo?:number,denominacion?:string,precio?:number,idCategoria?:number){
    this.codigo=codigo;
    this.denominacion=denominacion;
    this.precio=precio;
    this.idCategoria=idCategoria;
  }
}
