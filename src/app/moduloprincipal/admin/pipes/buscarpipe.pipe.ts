import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscarpipe'
})
export class BuscarpipePipe implements PipeTransform {

  transform(value: any[], input: any): any[] {

    console.log('BUSCANDO  ', input);
    if (input) {
      return value.filter((item) => JSON.stringify(item).toLocaleLowerCase().includes(input))
    }
    else {
      return value;

    }
  }

}
