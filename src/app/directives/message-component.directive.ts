import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMessageComponent]'
})
export class MessageComponentDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
