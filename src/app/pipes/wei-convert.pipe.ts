import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weiConvert'
})
export class WeiConvertPipe implements PipeTransform {

  transform(value: number): number {
    return value / 1000000000000000000;
  }

}
