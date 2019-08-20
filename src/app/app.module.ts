import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MessageComponent } from './message/message.component';
import { PlaceholderDirective } from './directives/placeholder.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChatBoxComponent,
    MessageComponent,
    PlaceholderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    MessageComponent
  ]
})
export class AppModule { }
