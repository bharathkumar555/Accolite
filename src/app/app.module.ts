import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LogInputBoxComponent } from './log-input-box/log-input-box.component';
import { DisplayLogTableComponent } from './display-log-table/display-log-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInputBoxComponent,
    DisplayLogTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
