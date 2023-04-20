import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'makingBio'
})
export class MakingBioPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return 'Hello my name is '+args[0]+' I am '+args[1]+' years old'+' i am working as a '+args[2];
  }

}
