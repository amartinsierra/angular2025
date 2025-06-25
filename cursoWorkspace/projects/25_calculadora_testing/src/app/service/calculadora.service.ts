import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  sumar(n1:number,n2:number):number{
    return n1+n2;
  }
  multiplicar(n1:number,n2:number):number{
    return n1*n2;
  }
  factorial(n:number):number{
    if(n<0){
      return 0;
    }
    let r:number=1;
    for(let i=n;i>1;i--){
      r=r*i;
    }
    return r;
  }

}
