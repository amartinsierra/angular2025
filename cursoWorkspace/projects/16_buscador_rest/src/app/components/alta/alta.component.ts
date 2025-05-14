import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Item } from '../../model/Item';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alta',
  imports: [FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  urlAlta:string;
  tematicaAlta:string;
  descripcionAlta:string;
  itemAlta:Item;

   constructor(private buscadorService:BuscadorService){}

   alta():void{
    const item = new Item(this.urlAlta,this.tematicaAlta,this.descripcionAlta);
    this.buscadorService.alta(item)
    .subscribe();
   }
}
