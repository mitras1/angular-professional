import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wherepipe'
})
export class WherepipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
