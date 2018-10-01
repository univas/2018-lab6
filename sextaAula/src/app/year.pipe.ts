import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'year'
})
export class YearPipe implements PipeTransform {

  transform(value: number): string {
    return value.toString().substring(2);
  }

}
