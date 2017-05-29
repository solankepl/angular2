import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {MessageService} from './message.service';

@Component({
    selector: 'child1',
    template:`<h2>Child1 Component with name {{name}} </h2>
                Enter New Name: <input type="text" #input /><button (click)="change(input.value)">Change</button><br>
                Enter Message: <input type="text" #msg /><button (click)="sendMsg(msg.value)">Send Message</button>
    `
    
})
export class Child1Component implements OnInit {
    @Input()
    name:string; //need to get the value from parent 

    @Output()
    update: EventEmitter<string> = new EventEmitter<string>();
    constructor(private messageservice:MessageService) { }

    change(newname:string):void{
        //Emit this value to the parent 
        //We will create a custom event here called as "update"
        this.update.emit(newname);
    }
    ngOnInit() { }

    sendMsg(msg:string):void{
        //invoke the MessageService -- sendMsg()
        this.messageservice.sendMsg(msg);
        
    }
}