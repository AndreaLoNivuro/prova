import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input('appHighlight') highlightColor: string;


  constructor(private el: ElementRef) { 
    //associa a questa variabile (el) il riferimento a cui sei applicata (ElementRef)
    //el.nativeElement.style.backgroundColor = "yellow";
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = null;
  }

  


}
