import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'menu',
    template:`
        <ul class="nav nav-tabs">
            <li *ngFor="let item of menuItems" [class]="active"><a href="#">{{item}}</a></li>
        </ul>
    `

})

export class MenuComponent  {
    menuItems:string[] = ["Home","welcome", "photo"] 
 
}