import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(value: string, isAddDDD: boolean): string {
    let temp = '';

    if (isAddDDD) {
      temp = '(35) ';
    }

    temp += value.substring(0, 5) + '-' +
               value.substring(5);
    return temp;
  }

}
