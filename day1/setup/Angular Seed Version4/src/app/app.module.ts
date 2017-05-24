import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { WelcomeComponent }  from './welcome.component';
import { ProductComponent }  from './product.component';
import { LoginComponent }  from './login.component';
import { FormsModule }      from '@angular/forms';
import { MobileProductComponent }  from './mobileproduct.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WelcomeComponent, ProductComponent, LoginComponent, MobileProductComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
