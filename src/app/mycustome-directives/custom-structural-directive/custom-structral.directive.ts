import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myStructuralProperty]' }) //NOTE: This selector name shld be same as property name used -> myStructuralProperty() 
//or else u will get error that not a known property for div element on which this directive used upon

export class CustomeStructuralDirective implements OnInit {

    @Input() set myStructuralProperty(condition: boolean) { //myStructuralProperty -> is a property, where as  
        // @Input() set myStructuralProperty() -> is a Setter method for this myStructuralProperty property 
        if (!condition) {
            this.viewContainerRef.createEmbeddedView(this.templateRef);//createEmbeddedView() -> it create the view
        } else {
            this.viewContainerRef.clear(); //clear() -> will clear the view
        }
    }

    //Before using the custome Structrual directive we need to specifiy on which Template we will be using
    // and where we will be using this custome_Structural-direcive
    //On Which template we will be using it -> (specified by) -> TemplateRef
    //Where we will be using it -> (specified by) -> ViewContainerRef

    constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.

    }

}