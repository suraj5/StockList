import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import{ FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {StockListComponent}  from './stock-list/stock-list.component';
import {StockListService} from './stock-list/stock-list.service';
@NgModule({
  declarations: [
    AppComponent, StockListComponent
  ],
  imports: [
    BrowserModule, HttpModule, FormsModule
  ],
  providers: [StockListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
