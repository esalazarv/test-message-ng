import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { MessageInterface } from '../interfaces/message-interface';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MessageComponent } from '../components/message/message.component';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private queueSubject: BehaviorSubject<MessageInterface[]> = new BehaviorSubject([]);
  current: MatDialogRef<MessageComponent>;
  queue$: Observable<MessageInterface[]> = this.queueSubject.asObservable();

  constructor(private dialog: MatDialog) {
    this.queue$.pipe(filter(queue => !!queue.length)).subscribe(queue => {
      const [firstMessage] = queue.slice(0, 1);
      this.handleMessage(firstMessage);
    });
  }

  success(message: MessageInterface, component) {
    message.type = 'success';
    message.component = component;
    this.add(message);
  }

  warning(message: MessageInterface) {
    message.type = 'warning';
    this.add(message);
  }

  error(message: MessageInterface) {
    message.type = 'error';
    this.add(message);
  }

  info(message: MessageInterface) {
    message.type = 'info';
    this.add(message);
  }

  remove() {
    this.queueSubject.next(this.queueSubject.getValue().slice(1));
  }

  add(message: MessageInterface) {
    this.queueSubject.next([...this.queueSubject.getValue(), message]);
  }

  private handleMessage(message: MessageInterface) {
    if (!this.dialog.openDialogs.length) {
      this.launchMessage(message);
    }
  }

  launchMessage(message: MessageInterface) {
    this.current = this.dialog.open(MessageComponent, {
      id: message.type,
      data: message,
    });

    this.current.afterClosed().subscribe(() => {
      this.remove();
    });
  }
}
