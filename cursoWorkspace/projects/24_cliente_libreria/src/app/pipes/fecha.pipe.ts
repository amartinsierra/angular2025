import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date): string {
    const fecha = (value instanceof Date) ? value : new Date(value);
    return fecha.getDate()+"/"+(fecha.getMonth()+1)+"/"+fecha.getFullYear();
  }

}
