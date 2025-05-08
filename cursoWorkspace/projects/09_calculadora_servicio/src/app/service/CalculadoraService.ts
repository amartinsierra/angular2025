export class CalculadoraService{
  sumar(n1:number,n2:number):number{
    return n1+n2;
  }
  multiplicar(n1:number,n2:number):number{
    return n1*n2;
  }
  factorial(n:number):number{
    let r:number=1;
    for(let i=n;i>1;i--){
      r=r*i;
    }
    return r;
  }
}
