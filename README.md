# DragNDrop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.0.


# install dependencies: 
npm i angular-gridster2 angular2-uuid --save

# development steps
- layout service and a layout component
*  a service to hold the data relating to our layout (data model) 
*  a service to do the transformation on the data attached to our drag and drop events.
* components to display data in our application - render the layout

ng generate component components/layout
ng generate service services/layout

- get our app to render our layout component by default
app.component.html
<app-layout></app-layout>

- make angular-gridster2 available inside our Angular project
app.module.ts
import { GridsterModule } from 'angular-gridster2';
imports: [
    BrowserModule,
    GridsterModule
  ],


- import in the component: LayoutComponent
import { GridsterConfig, GridsterItem } from 'angular-gridster2';

- add options and layout values inside the class definition of LayoutComponent
options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };  
  
  layout: GridsterItem[] = [];


- in layout.component.html, create a new instance of Gridster in our component template by referencing the <gridster> tag.

<code>
  <div class="toolbar"></div>
  <gridster [options]="options">
    <gridster-item *ngFor="let item of layout" [item]="item">
    </gridster-item>
  </gridster> 
</code>
 
 
  - create a service to help us manage our layouts: Layout service
 
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
# dragNdrop
