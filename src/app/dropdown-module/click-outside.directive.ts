import { Input, Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})
export class ClickOutsideDirective  {
  @Output() clickedOutside: EventEmitter<Element>;

  private element: Element

  constructor(private elementRef: ElementRef) {
    this.clickedOutside = new EventEmitter<Element>(null);
    this.element = this.elementRef.nativeElement;
  }

  @HostListener('body:click', ['$event  .target'])
  onBodyClick(element: Element) {
    if (this.isClickedOutside(element)) {
      this.clickedOutside.emit(element);
    }
  }

  private isClickedOutside(target: Element) {
    if (target === this.elementRef.nativeElement) {
      return false;
    }
    else if (target.parentElement) {
      return this.isClickedOutside(target.parentElement);
    }
    
    return true;
  }
}
