import { Component } from '@angular/core';
import { CalculadoraService } from '../service/CalculadoraService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  //variables para recogida de campos numéricos
  num1:number;
  num2:number;
  //variable para almacenamiento de resultado
  resultado:string;

  //variable para el objeto de servicio
  calService:CalculadoraService;
  constructor(){
    this.calService=new CalculadoraService();
  }
  sumar():void{
    this.resultado=`La suma es ${this.calService.sumar(this.num1,this.num2)}`;
  }
  multiplicar():void{
    this.resultado=`La multiplicación es ${this.calService.multiplicar(this.num1,this.num2)}`
  }
}
