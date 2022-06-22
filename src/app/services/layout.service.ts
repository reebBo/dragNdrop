import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

export interface IComponent {
  id: string;
  componentRef: string;
}

const OptionsGridsterConfig: GridsterConfig = {
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
  dropId: string = '';
  public components: IComponent[] = [];

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

  getConfig(): GridsterConfig {
    return OptionsGridsterConfig;
  }

  public layout: GridsterItem[] = [
    { cols: 1, rows: 2, x: 0, y: 0, id: 1 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 2 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 3 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 4 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 5 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 6 },
    { cols: 1, rows: 2, x: 0, y: 0, id: 7 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 8 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 9 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 10 },
    { cols: 1, rows: 2, x: 0, y: 0, id: 11 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 12 },
    { cols: 1, rows: 1, x: 0, y: 0, id: 13 }

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
      { cols: 1, rows: 1, x: 0, y: 0, id: UUID.UUID() },

    );
  }


  deleteItem(item: any) {
    const itemId: any = this.layout.find(d => d.id === item.id);
    this.layout.splice(this.layout.indexOf(itemId), 1);
  }


  setDropId(dropId: string): void {
    this.dropId = dropId;
    // console.log(this.dropId)
  }

  dropItem(dragId: string): void {
    const { components } = this;
    console.log('this.dropId ', this.dropId)
    console.log('dragId ', dragId)

    const comp: any = components.find(c => c.id === this.dropId);
    // const comp: IComponent = components.find(c => c.id === this.dropId);

    const updateIdx: number = comp ? components.indexOf(comp) : components.length; 
    const componentItem: IComponent = {
      id: this.dropId,
      componentRef: dragId
    }; 
    
    this.components = Object.assign([], components, { [updateIdx]: componentItem });
  } 
  
  
  // getComponentRef(id: string): string {
  //   const comp = this.components.find(c => c.id === id);
  //   return comp ? comp.componentRef : null;
  // }


}


// https://medium.com/javascript-in-plain-english/drag-and-drop-dashboard-builder-with-angular-and-gridster-a07592e54ce2