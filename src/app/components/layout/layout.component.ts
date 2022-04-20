import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from 'src/app/services/layout.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  options: GridsterConfig ={} ;
   
  
  constructor(public layoutService: LayoutService) { }

  // get options(): GridsterConfig {
  //   return this.layoutService.options;
  // } 
  
  get layout(): GridsterItem[] {
    return this.layoutService.layout;
  }

 

  ngOnInit() { 
    this.options= this.layoutService.getConfig();

  }
}

 
