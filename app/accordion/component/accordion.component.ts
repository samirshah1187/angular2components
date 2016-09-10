import {Component, Input, OnDestroy} from 'angular2/core';

import {AccordionGroup} from './accordion-group.component';

@Component({
  selector: 'accordion',
  templateUrl:'app/accordion/component/accordion.component.html',
  host: {
    'class': 'panel-group'
  }
})
export class Accordion {
  public pageTitle: string = "Accordion Example";
  groups: Array<AccordionGroup> = [];
  
  addGroup(group: AccordionGroup): void {
    this.groups.push(group);
  }
  
  closeOthers(openGroup: AccordionGroup): void {
    this.groups.forEach((group: AccordionGroup) => {
      if (group !== openGroup) {
        group.isOpen = false;
      }
    });
  }
  
  removeGroup(group: AccordionGroup): void {
    const index = this.groups.indexOf(group);
    if (index !== -1) {
      this.groups.splice(index, 1);
    }
  }
}