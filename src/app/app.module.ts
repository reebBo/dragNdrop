import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';  

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    Example1Component,
    Example2Component, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  entryComponents: [
    Example1Component,
    Example2Component
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
