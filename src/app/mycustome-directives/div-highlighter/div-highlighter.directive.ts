import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({ selector: '[appHoverDivHighlighter_customeDirective]' })
export class DivHighlighterDirective implements OnInit {

    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    //Using HostBinding instead of renderer to implement the same logic
    @HostBinding('style.backgroundColor') myBackgroundColor: string = 'transparent';

    ngOnInit(): void { }

    // Using HostListener to implements logic on our custome directives
    @HostListener('mouseenter') myMouseEnter(eventData: Event) {//mouseenter builtin event
        this.myBackgroundColor = 'red'
    }

    @HostListener('mouseleave') myMouseLeave(eventData: Event) {//mouseenter builtin event
        this.myBackgroundColor = 'transparent'
    }

}