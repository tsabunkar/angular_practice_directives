import { Directive, ElementRef, Component, OnInit } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight_customeDirective]' // custome attribute selector
})
export class MyBackgorundHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) { }
    //elementRef is -> the reference of a html element on which this custome directive will be placed upoon

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        this.elementRef.nativeElement.style.backgroundColor = "lightgreen";

        /* 
          NOTE: This is not a good practice by directly accessing the element
          thus,  using elementRef.nativeElement -> shld only be used to get/fetch html eleme value
          but we shld never manupilate its(html eleme) value (Its like ur changing the DOM behaviour)
          So recommended way of doing this above logic is
           shown in 'appBetterHighlighter_customeDirective'
           */
    }

    /* 
         Directive only have 2 life cycle-hook ngOnInit() and ngOnDestroy(), Directive wont be having other
         life-cycles hook like  ngAfterViewInit(),ngAfterContentInit(), etc..
         bcoz -> Directive doesnot have View/Template page unlike Component which has all the life cycle hooks
         as it has Template/html page
     */
}