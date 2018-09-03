import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBetterHighlighter_customeDirective]'
})
export class BetterHighlighterDirective implements OnInit {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  /* 
    Renderer(Pronunce  as -> Rend-a-ra) is better appoach for rendering/accessing/manuplating the DOM element
    bcoz-Angular is not limited to work only in Browser, Angular also works with service-workers(where we don't
    have access to the DOM) so in this platform if we try manipulate the DOM might break our application 
    Renderer -> gives many method to access the DOM element and play with it :)
     */
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightblue');
  }

}
