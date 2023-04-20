import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inrtoUSD'
})
export class InrtoUSDPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    let [x] = args;
    // return '&#8377;'+value+' '+'='+' '+value*x+'$';
    return `${value} = ${value*x}$`;
  }

}
