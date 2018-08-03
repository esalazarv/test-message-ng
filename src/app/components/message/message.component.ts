import {Component, ComponentFactoryResolver, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MessageInterface } from '../../interfaces/message-interface';
import { MessageComponentDirective } from '../../directives/message-component.directive';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @ViewChild(MessageComponentDirective) body: MessageComponentDirective;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private dialogRef: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageInterface,
  ) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.data.component);
    this.body.viewContainerRef.clear();
    this.body.viewContainerRef.createComponent(componentFactory);
  }

}
