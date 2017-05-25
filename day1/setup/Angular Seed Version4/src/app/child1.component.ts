import {Component , OnInit, Input, Output, Injectable} from '@angular/core';
import { MessageService } from './message.service';

@Component({
    selector : 'child-1',
    template :`<h2>chilid 1 Component {{name}}</h2>
    `
})

export class Child1Component implements OnInit {

    @Input()   

    name:string;
   
     constructor(private messageService:MessageService) {
      
    } 
    ngOnInit(){

    }

    sendMsg(msg:string):void{
          this.messageService.sendMsg("test");  
    }

}