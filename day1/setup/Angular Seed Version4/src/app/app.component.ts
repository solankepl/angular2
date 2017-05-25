import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <welcome></welcome> <products></products> <login></login> <parent></parent>`,
})
export class AppComponent  { name = 'Angular'; }
