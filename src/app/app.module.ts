import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyBackgorundHighlightDirective } from './mycustome-directives/basic-higlight/basic-higlight.directive';
import { BetterHighlighterDirective } from './mycustome-directives/better-highlighter/better-highlighter.directive';
import { HoverHighlighterDirective } from './mycustome-directives/hover-highlighter/hover-higlighter.directive';
import { DivHighlighterDirective } from './mycustome-directives/div-highlighter/div-highlighter.directive';
import { CustomeStructuralDirective } from './mycustome-directives/custom-structural-directive/custom-structral.directive';

@NgModule({
  declarations: [ //all the custome Component, Directive and Pipe will be declared in this declarations array 
    AppComponent,
    MyBackgorundHighlightDirective,
    BetterHighlighterDirective,
    HoverHighlighterDirective,
    DivHighlighterDirective,
    CustomeStructuralDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
