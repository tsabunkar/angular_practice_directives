import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({ selector: '[appHoverHighlighter_customeDirective]' })
export class HoverHighlighterDirective implements OnInit {


    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit(): void {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightpink');
    }

    // Using HostListener to implements logic on our custome directives

    @HostListener('mouseenter') myMouseEnter(eventData: Event) {//mouseenter builtin event
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'lightpink');
    }
 
    @HostListener('mouseleave') myMouseLeave(eventData: Event) {//mouseenter builtin event
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    }


}