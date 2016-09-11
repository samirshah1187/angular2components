import {Component, Input, OnDestroy} from 'angular2/core';

import {Accordion} from './accordion.component';

@Component({
  selector: 'accordion-group',
  templateUrl:'app/accordion/component/accordion-group.component.html',
  styles : [`
    .active{
     transform: rotate(90deg);
    }
  `],
})
export class AccordionGroup implements OnDestroy {
  private _isOpen:boolean = false;
  
  @Input() subject: string;
  @Input() title: string;
  @Input() date: string;
  @Input() duration: string;
  
  @Input()
  set isOpen(value: boolean) {
    this._isOpen = value;
    if (value) {
      this.accordion.closeOthers(this);
    }
  }
  
  get isOpen() {
    return this._isOpen;
  }
  
  constructor(private accordion: Accordion) {
    this.accordion.addGroup(this);
  }
  
  ngOnDestroy() {
    this.accordion.removeGroup(this);
  }
  
  toggleOpen(event: MouseEvent): void {
    event.preventDefault();
    this.isOpen = !this.isOpen;
  }
}