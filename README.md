# AngularPracticeDirective

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

========================================================================================================
Attibute v/s Structural directives

Attribute Directive(built-in):
-> they looks like a normal HTML Attribute (possibly 
with databinding or event binding)
-> Only effect/change the element they are added to.
This directive wont effect the DOM Structure
(element properties or css get changed)
ex- ngStyle, ngClass

Structural Directive (built-in):
-> they looks like  a normal HTML Attibute but having a leading * (star)
-> Affects the whole structure of the DOM tree (elements get added or removed)
ex- *ngFor, *ngIf

Note : We cannot More than 1 structural directive on html element

for ex -
<li *ngFor="let number of numbers" *ngIf="number%2 == 0"> 
{{number}}
</li>

This will give Runtime Exception more than one structural directive 
cannot be assigned to single html element

Whereas, We can apply two or more Attribute Directive on a single
HTML Element

-------------------------------------------------------------------------------------------------------