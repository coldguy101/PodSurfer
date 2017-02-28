import { Pipe, Injectable, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field : string, value : string): any[] {
    if (!items) return [];
    if (!field || !value) return items;
    return items.filter(it => it[field].toLowerCase().includes(value.toLowerCase()));
  }
}