import {Component , OnInit, Input, Output, Injectable} from '@angular/core';
import { MessageService } from './message.service';
@Component({
    selector : 'child-2',
    template :`<h2>chilid 2 Component {{message}}</h2>
    `
})

export class Child2Component implements OnInit {

    //@Input()   

    message:string;
    
    constructor(private messageService:MessageService) {
      this.messageService.getMsg().subscribe(Response =>{
          this.message = Response;
      })
    } 
    ngOnInit(){

    }

}