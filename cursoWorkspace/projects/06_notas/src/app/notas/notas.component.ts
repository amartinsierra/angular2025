import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notas',
  imports: [FormsModule],
  templateUrl: './notas.component.html',
  styleUrl: './notas.component.css'
})
export class NotasComponent {
  //variables
  notas:number[]=[];
  nota:number;
  media:number;
  alta:number;
  baja:number;
  aprobados:number;
  //métodos de respuesta a eventos
  guardar():void{
    this.notas.push(this.nota);
  }
  datos():void{
    this.media=this.calculaMedia();
    this.alta=this.calcularAlta();
    this.baja=this.calcularBaja();
    this.aprobados=this.totalAprobados();
  }

  //estos métodos son para uso interno de los métodos
  //de evento

  calculaMedia():number{
    let suma:number=this.notas.reduce((a,b)=>a+b);
    return suma/this.notas.length;
  }
  calcularAlta():number{
    let max=this.notas[0];
    this.notas.forEach(n=>{
      if(n>max){
        max=n;
      }
    });
    return max;
  }
  calcularBaja():number{
    let min=this.notas[0];
    this.notas.forEach(n=>{
      if(n<min){
        min=n;
      }
    });
    return min;
  }
  totalAprobados():number{
    /*let total=0;
    this.notas.forEach(n=>{
      if(n>=5){
        total++;
      }
    });
    return total;
    */

    return this.notas.filter(n=>n>=5).length;
  }

}
