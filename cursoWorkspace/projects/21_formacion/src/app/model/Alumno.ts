export class Alumno {

  usuario: string;
  password: string;
  nombre: string;
  email: string;
  edad: string;
  constructor(usuario: string, password: string, nombre: string, email: string, edad: string) {
    this.usuario = usuario;
    this.password = password;
    this.nombre = nombre;
    this.email = email;
    this.edad = edad;
  }

}
