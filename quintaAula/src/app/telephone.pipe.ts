import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone'
})
export class TelephonePipe implements PipeTransform {

  transform(value: string): string {
    if (value && value.trim().length > 4) {
      return value.substring(0, 5) + '-' + value.substring(5);
    }
    return value;
  }

}
