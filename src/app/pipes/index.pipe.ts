import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'indexPipe'
})
export class IndexPipe implements PipeTransform {

  transform(value: number): number {
    return value+1;
  }

}
