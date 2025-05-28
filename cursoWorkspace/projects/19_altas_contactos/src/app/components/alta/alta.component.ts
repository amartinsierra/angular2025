import { Component } from '@angular/core';
import { ContactosService } from '../../service/contactos.service';
import { Contacto } from '../../model/Contacto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  mensaje:string;
  fecha:Date;
  contacto:Contacto=new Contacto();
  constructor(private contactosService:ContactosService){

  }
  alta(){
    console.log(this.fecha);
    //si el error se controla aquí en el componente
    /*this.contactosService.alta(this.contacto).subscribe({
        next: data=>this.mensaje="Contacto agregado",
        error: err=>this.mensaje="No se pudo dar de alta el contacto!!!"
      }
    );*/
    //si el error se ha capturado en el service
    this.contactosService.alta(this.contacto)
    .subscribe(data=>{
      if(data){
        this.mensaje="Contacto agregado";
      }else{
        this.mensaje="No se pudo dar de alta el contacto!!!";
      }
    })

  }
}
