import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material';
import { MessageService } from './services/message.service';
import { MessageComponent } from './components/message/message.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageComponentDirective } from './directives/message-component.directive';
import { SuccessMessageTestComponent } from './components/success-message-test/success-message-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    MessageComponentDirective,
    SuccessMessageTestComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  entryComponents: [MessageComponent, SuccessMessageTestComponent],
  providers: [MessageService],
  bootstrap: [AppComponent],
})
export class AppModule { }
