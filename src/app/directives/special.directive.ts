import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSpecial]',
  standalone: true
})
export class SpecialDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'deeppink';
  }

}
