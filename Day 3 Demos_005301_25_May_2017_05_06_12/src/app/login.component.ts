import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    template:`
        Enter Name:<input type="text" #uname [(ngModel)]="user.name" /><br>
        Enter Password:<input type="password" [ngModel]="user.password" /><br>
        <button>Login</button> <br>
        User Name in class:{{user.name}} <br>
        User Name on the View: {{uname.value}}
    ` 
})
export class LoginComponent implements OnInit {

    user:any;
    constructor() {
        this.user = {name:'Admin',password:'Admin'};
     }

    ngOnInit() { }
}