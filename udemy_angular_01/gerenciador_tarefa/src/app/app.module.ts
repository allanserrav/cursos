import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TarefasModule } from "./tarefas";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TarefasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
