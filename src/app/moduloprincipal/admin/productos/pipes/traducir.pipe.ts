import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'traducir'
})
export class TraducirPipe implements PipeTransform {

  transform(value: any): any {
    return value.toUpperCase();
  }

}
