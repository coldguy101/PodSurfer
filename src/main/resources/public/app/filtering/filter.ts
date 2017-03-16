import { Pipe, Injectable, PipeTransform } from '@angular/core'

@Pipe({
  name: 'filter'
})
@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items : any[], field : string, value : string): any[] {
    let theItems: any[] = [];
    if (!items) return [];
    if (!field || !value) return items;

    /*for(let field of fields) {
      theItems.push(items.filter(it => it[field].toLowerCase().includes(value.toLowerCase())));
    }*/

    //return theItems;
    return items.filter(it => it[field].toLowerCase().includes(value.toLowerCase()));
  }
}