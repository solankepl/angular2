import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { WelcomeComponent }  from './welcome.component';
import { ProductComponent }  from './product.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, WelcomeComponent, ProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
