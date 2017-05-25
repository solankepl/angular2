import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { WelcomeComponent }  from './welcome.component';
import { ProductComponent }  from './product.component';
import { LoginComponent }  from './login.component';
import { FormsModule }      from '@angular/forms';
import { MobileProductComponent }  from './mobileproduct.component';
import { ParentComponent }  from './parent.component';
import { Child1Component }  from './child1.component';
import { Child2Component }  from './child2.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, WelcomeComponent, ProductComponent, LoginComponent, MobileProductComponent, ParentComponent, Child1Component, Child2Component],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
