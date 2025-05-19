export class Categoria{
  idCategoria:number;
  nombre:string;
  proveedor:string;
  constructor(idCategoria:number,nombre:string,proveedor:string){
    this.idCategoria=idCategoria;
    this.nombre=nombre;
    this.proveedor=proveedor;
  }
}
