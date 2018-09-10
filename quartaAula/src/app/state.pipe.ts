import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: string): string {

    if (value.toUpperCase() == 'MG') {
      return 'MG - Minas Gerais';
    } else if (value.toUpperCase() == 'SP') {
      return 'SP - São Paulo';
    }

    return value + ' - Desconhecido';
  }

}
