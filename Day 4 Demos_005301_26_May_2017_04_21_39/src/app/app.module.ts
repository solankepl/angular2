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
import {RouterModule,Routes} from '@angular/router';
import {MenProductsComponent} from './menproducts.component';
import {WomenProductsComponent} from './womenproducts.component';
import {KidsProductsComponent} from './kidsproducts.component';
import {ProductDetailsComponent} from './productdetails.component';
import {HttpModule} from '@angular/http';
import {PhotosComponent} from './photos.component';
import {PhonePipe} from './phone.pipe';

const routes:Routes= [
  {
    path:'',
    component:PhotosComponent
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'products',
    component:ProductsComponent,
    children:[
      {
        path:'men',
        component:MenProductsComponent,
        children:[
          {
            path:'productdetails/:id',
            component:ProductDetailsComponent
          }
        ]
      },
      {
        path:'women',
        component:WomenProductsComponent
      },
      {
        path:'kids',
        component:KidsProductsComponent
      }

    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'userform',
    component:SignUpFormComponent
  }
  


]

@NgModule({
  imports:      [ BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpModule ],
  declarations: [ AppComponent,PhonePipe,PhotosComponent,WelcomeComponent,ProductsComponent,LoginComponent,MobileProductsComponent,ParentComponent,Child1Component,Child2Component,SignUpFormComponent,MenuComponent,MenProductsComponent,WomenProductsComponent,KidsProductsComponent,ProductDetailsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
