import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
             <menu></menu>
             <h1>Hello {{name}}</h1>
             <router-outlet></router-outlet>
             
  `,
})
export class AppComponent  { name = 'Harish'; }
