import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';

@Component({
    selector: 'child2',
    template: `<h2>Child2 Component gets message from Child1 {{message}}</h2>`
    
})
export class Child2Component implements OnInit {
    message:string;
    constructor(private messageservice:MessageService) { 
        //Needs to get the message from the MessageService 
        this.messageservice.getMsg().subscribe(response=>{
            //process the data here from getMsg()
            this.message = response;

        })
    }

    ngOnInit() { }
}