import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduceText',
})
export class ReduceTextPipe implements PipeTransform {
  transform(value: any) {
    return value.substr(0, 50);
  }
}
