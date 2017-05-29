import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {WelcomeComponent} from './welcome.component'
import {ProductsComponent} from './products.component'
import {LoginComponent} from './login.component'
import {FormsModule} from '@angular/forms';
import {MobileProductsComponent} from './MobileProducts.component'
import {ParentComponent} from './parent.component';
import {Child1Component} from './child1.component';
import {Child2Component} from './child2.component';
import {SignUpFormComponent} from './signupform.component';
import {MenuComponent} from './menu.component'


@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,WelcomeComponent,ProductsComponent,LoginComponent,MobileProductsComponent,ParentComponent,Child1Component,Child2Component,SignUpFormComponent,MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
