import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DropdownModule } from './dropdown-module/dropdown.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [ BrowserModule, DropdownModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
