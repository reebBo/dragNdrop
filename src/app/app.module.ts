import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GridsterModule } from 'angular-gridster2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';  

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  entryComponents: [
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
