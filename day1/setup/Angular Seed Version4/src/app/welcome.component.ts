import {Component} from '@angular/core';

@Component({
    selector : 'welcome',
    template :'<h1> {{message}}</h1>', 
    styles:[` 
    h1{
            color:red;
        }    
    `]
})

export class WelcomeComponent{
    message:string;
    constructor(){
        this.message ="welcome to my application";
    }

}