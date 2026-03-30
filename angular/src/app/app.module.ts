import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppLogicService } from './app-logic.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [AppLogicService],
  bootstrap: [AppComponent],
})
export class AppModule {}
