export class Curso{
idCurso: number;
nombre: string;
duracion: number;
fechaInicio: Date;
precio: number;
constructor(idCurso: number, nombre?: string, duracion?: number, fechaInicio?: Date, precio?: number) {
    this.idCurso = idCurso;
    this.nombre = nombre || '';
    this.duracion = duracion || 0;
    this.fechaInicio = fechaInicio || new Date();
    this.precio = precio || 0;
  }
}
