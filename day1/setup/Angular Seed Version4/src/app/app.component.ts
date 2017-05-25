import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> 
    <menu></menu>
    <userform class="red" ></userform>
   <welcome></welcome> <products></products> <login></login> <parent></parent>   
  `,
  
})
export class AppComponent  { name = 'Angular'; }
