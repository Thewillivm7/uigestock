import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterFn: (item: any) => boolean): any[] {
    if (!items || !filterFn) {
      return items;
    }
    
    return items.filter(filterFn);
  }
}
