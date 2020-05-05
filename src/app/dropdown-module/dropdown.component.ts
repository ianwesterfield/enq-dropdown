import { Component, OnInit, Input, HostListener, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DropdownOption } from './dropdown-option';

enum KEY_CODE {
  ENTER = 13,
  ESCAPE = 27
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  @Input('value') value: any;
  @Input('placeholder') placeholder: string = 'Select...';
  @Input('multiple') multiple: boolean;
  @Input('summaryLabel') summaryLabel: boolean;
  @Input('options') options: DropdownOption[];

  @Output() dropdownClosed: EventEmitter<any>;
  
  optionSearch: FormControl;
  dropDownShown = false;

  constructor() {
    this.optionSearch = new FormControl();
    this.options = new Array<DropdownOption>();
    this.dropdownClosed = new EventEmitter<any>();
  }

  get selectedCount(): number {
    return this.options.filter(option => option.selected).length;
  }

  get filteredOptions(): DropdownOption[] {
    return this.options.filter(option => option.selected || option.label.toLowerCase().indexOf(this.optionSearch.value.toLowerCase()));
  }

  get selectedOption(): DropdownOption {
    return this.options.find(option => option.selected);
  }

  get buttonLabel(): string {
    if (this.selectedCount === 0) return this.placeholder;
    if (this.multiple && this.summaryLabel) return `${this.selectedCount} item${this.selectedCount > 1 ? 's': ''}`;
    if (this.multiple && !this.summaryLabel) return this.options.filter(option => option.selected).map(option => option.label).join(', ');
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (KEY_CODE[event.keyCode]) {
      this.dropDownShown = false;
      this.dropdownClosed.emit();
    }
  }

  toggleDropDown() {
    this.dropDownShown = !this.dropDownShown;

    if (!this.dropDownShown) {
      this.dropdownClosed.emit();
    }
  }

  onClickedOutside() {
    this.dropDownShown = false;
    this.dropdownClosed.emit();
  }

  toggleAll(selected) {
    this.options.forEach(option => option.selected = selected);
  }

  selectOption(option: DropdownOption) {
    if (this.multiple) {
      return option.selected = !option.selected;
    }

    this.options.forEach(option => option.selected = false);
    option.selected = !option.selected;    
  }
}
