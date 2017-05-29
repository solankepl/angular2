import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';
@Component({
    selector: 'parent',
    template:`<h1>Parent Component {{username}} </h1>
                <child1 [name]="username" (update)="handleUpdate($event)"></child1>

                <child2></child2>
                
    `,
    providers:[MessageService]
})
export class ParentComponent implements OnInit {
    username:string="Kim";
  constructor(private messageservice:MessageService) { }

    handleUpdate(newname:string){
        this.username = newname;
    }
    ngOnInit() { }
}