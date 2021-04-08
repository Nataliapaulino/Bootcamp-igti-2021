import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TictoctoeComponent } from './tictoctoe/tictoctoe.component';

@NgModule({
  declarations: [
    AppComponent,
    TictoctoeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
