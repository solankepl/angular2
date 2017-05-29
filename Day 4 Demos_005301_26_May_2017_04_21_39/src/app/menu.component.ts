import {Component} from '@angular/core'

@Component({
    selector:'menu',
    template:`
    <ul class="nav nav-pills">
    <li *ngFor="let item of menuItems" role="presentation" class="active">
    <a [routerLink]="item |lowercase">{{item}}</a></li>
    
</ul>
    
    `
})
export class MenuComponent{
    menuItems:string[]=["Home","Welcome","Photos","Login","Products","UserForm"];
}