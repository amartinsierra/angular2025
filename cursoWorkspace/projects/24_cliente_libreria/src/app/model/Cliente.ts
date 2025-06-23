export class Cliente{
    usuario:string;
    password:string;
    idCliente:number;
    // Constructor con parámetros opcionales
    constructor(usuario?: string, password?: string) {
        this.usuario = usuario || '';
        this.password = password || '';
    }
}
