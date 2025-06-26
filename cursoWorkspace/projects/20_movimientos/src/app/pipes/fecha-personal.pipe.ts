import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaPersonal'
})
export class FechaPersonalPipe implements PipeTransform {

  transform(value: any): string {
    const mifecha:Date=(value instanceof Date)?value:new Date(value);
    const dia:string=(mifecha.getDate()<10)?"0"+mifecha.getDate():mifecha.getDate()+"";
    const mes:string=((mifecha.getMonth()+1)<10)?"0"+(mifecha.getMonth()+1):(mifecha.getMonth()+1)+"";
    return `${dia}/${mes}/${mifecha.getFullYear()}`;
  }

}
