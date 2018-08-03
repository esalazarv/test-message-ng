import { Component, OnInit } from '@angular/core';
import { MessageService } from './services/message.service';
import { SuccessMessageTestComponent } from './components/success-message-test/success-message-test.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private messenger: MessageService) {}

  ngOnInit() {
  }

  addErrorMessage() {
    this.messenger.error({message: 'error message'});
  }

  addSuccessMessage() {
    this.messenger.success({message: 'success message'}, SuccessMessageTestComponent);
  }

  addWarningMessage() {
    this.messenger.warning({message: 'warning message'});
  }

  addInfoMEssage() {
    this.messenger.info({message: 'info message'});
  }
}
