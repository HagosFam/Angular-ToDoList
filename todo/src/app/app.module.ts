import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './todocomponents/add/add.component';
import { ListComponent } from './todocomponents/list/list.component';
import { UpdateComponent } from './todocomponents/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ListComponent,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
