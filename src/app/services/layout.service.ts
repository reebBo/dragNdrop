import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
}

const OptionsGridsterConfig:GridsterConfig={
  draggable: {
    enabled: true
  },
  pushItems: true,
  resizable: {
    enabled: true
  } 
}

@Injectable({
  providedIn: 'root'
})


export class LayoutService {
 

  // public options: GridsterConfig = {
  //   draggable: {
  //     enabled: true
  //   },
  //   pushItems: true,
  //   resizable: {
  //     enabled: true
  //   },
  //   // minCols:4,
  //   // maxCols:8,
  //   // maxRows:6,
  //   // defaultItemCols:4,
  //   // maxItemCols:5,
  //   // maxItemArea:35
  // }; 
  
  getConfig():GridsterConfig{
    return OptionsGridsterConfig;
  }

  public layout: GridsterItem[] = [
    {cols:1, rows:2, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:2, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:2, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0},
    {cols:1, rows:1, x: 0, y: 0}

  ]; 

  constructor() { } 
  
  addItem(): void {
    this.layout.push(
    //   {
    //   cols: 5,
    //   id: UUID.UUID(),
    //   rows: 5,
    //   x: 0,
    //   y: 0
    // }
    {cols:1, rows:1, x: 0, y: 0},

    );
  } 
  
  
  deleteItem(id: any): void {
    const item:any = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}


