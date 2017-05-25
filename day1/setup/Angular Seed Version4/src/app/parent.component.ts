import {Component, OnInit} from '@angular/core';
import { MessageService } from './message.service';
@Component({
    selector : 'parent',
    template :`<h2>parent Component {{username}}</h2>
                <child-1 [name] = "username"></child-1>
                <child-2></child-2>

    `,
     providers:[MessageService]
})

export class ParentComponent implements OnInit {
    username:string ="kim";
    
    constructor(private messageService:MessageService) {
      
    } 

    ngOnInit(){
      
    }

}