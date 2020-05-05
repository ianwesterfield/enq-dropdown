import { Component } from '@angular/core';
import { DropdownOption } from './dropdown-module/dropdown-option';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  options: DropdownOption[];

  constructor() {
    this.options = new Array<DropdownOption>();
  }

  addItem() {
    this.options.push({
      label: `Item ${this.options.length}`,
      selected: false,
      value: `${this.options.length}`
    })
  }

  onDropdownClosed() {
    console.log('dropdown closed');
  }
}
