import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
             <menu></menu>
             <h1>Hello {{name}}</h1>
             
  `,
})
export class AppComponent  { name = 'Harish'; }
