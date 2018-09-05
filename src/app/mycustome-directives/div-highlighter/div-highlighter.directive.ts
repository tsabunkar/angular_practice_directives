import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({ selector: '[appHoverDivHighlighter_customeDirective]' })
export class DivHighlighterDirective implements OnInit {

    //cutome property binding 
    @Input() defaultColor: string = 'transparent';
    @Input('appHighlighterAliasName') highlightColor: string = 'red';

    // constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    //Using HostBinding instead of renderer to implement the same logic
    // @HostBinding('style.backgroundColor') myBackgroundColor: string = 'transparent';
    @HostBinding('style.backgroundColor') myBackgroundColor: string = this.defaultColor;

    ngOnInit(): void { }

    // Using HostListener to implements logic on our custome directives
    @HostListener('mouseenter') myMouseEnter(eventData: Event) {//mouseenter builtin event
        // this.myBackgroundColor = 'red'
        this.myBackgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') myMouseLeave(eventData: Event) {//mouseenter builtin event
        // this.myBackgroundColor = 'transparent'
        this.myBackgroundColor = this.defaultColor;
    }



}