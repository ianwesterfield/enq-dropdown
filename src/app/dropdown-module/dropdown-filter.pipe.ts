import { Pipe, PipeTransform } from '@angular/core';
import { DropdownOption } from './dropdown-option';

@Pipe({
  name: 'dropdownFilter',
  pure: false
})
export class DropdownFilterPipe implements PipeTransform {
  transform(items: DropdownOption[], args: any[]): any {
    if (!args || !args[0]) {
      return items;
    }
    
    return items.filter(item => item.label.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
  }
}