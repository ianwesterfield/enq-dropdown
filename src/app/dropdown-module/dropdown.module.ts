import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown.component';
import { DropdownFilterPipe } from './dropdown-filter.pipe';
import { DropdownOption } from './dropdown-option';
import { ClickOutsideDirective } from './click-outside.directive';

const members = [DropdownComponent, DropdownFilterPipe, ClickOutsideDirective];

@NgModule({
  imports: [FormsModule, BrowserModule, ReactiveFormsModule],
  declarations: members,
  exports: members
})
export class DropdownModule { }
