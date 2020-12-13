import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  @HostBinding('class.open') isOpen = false;

  // tslint:disable-next-line:typedef
  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
    const part = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(part, 'show');
    } else {
      this.renderer.removeClass(part, 'show');
    }
  }

}
