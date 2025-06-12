export class Producto{
    codigoProducto:number;
    producto:string;
    precioUnitario:number;
    stock:number;
    constructor(codigoProducto?:number, producto?:string, precioUnitario?:number, stock?:number){
        this.codigoProducto = codigoProducto;
        this.producto = producto;
        this.precioUnitario = precioUnitario;
        this.stock = stock;
    }
}
