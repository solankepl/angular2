import {Component} from '@angular/core';

@Component({
    selector:'welcome',
    template:`<h2>{{message}}</h2>
    
    
    `,
    styles:[`
        h2{
            color:red;
        }
    
    `]
})
export class WelcomeComponent{
    message:string;
    constructor(){
        this.message="Welcome to my Application";
    }  

}