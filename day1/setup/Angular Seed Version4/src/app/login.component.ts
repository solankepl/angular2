import {Component} from '@angular/core';

@Component({
    selector : 'login',
    template :`
        USer Name <input type="text" #uname [(ngModel)] = "user.name"/> <br>
        Password <input type="password" [(ngModel)] = "user.password" /> <br>
        <button>login</button> <br>
        user name in class:{{user.name}} <br>
        new name : {{uname.value}}
    `, 
    
})

export class LoginComponent{
    user:any;
    constructor(){
        this.user ={name:'Admin', password:'admin'}
    }
    ngOnint(){

    }

}