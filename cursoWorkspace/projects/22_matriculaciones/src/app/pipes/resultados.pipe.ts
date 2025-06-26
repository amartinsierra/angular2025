import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resultados'
})
export class ResultadosPipe implements PipeTransform {

  transform(value: number): string {
    let res:string="desconocido";
    if(value<5){
      res="suspenso";
    }
    if(value>=5&&value<7){
      res="aprobado";
    }
    if(value>=7&&value<9){
      res="notable";
    }
    if(value>=9&&value<=10){
      res="sobresaliente";
    }
    return res;
  }
}
