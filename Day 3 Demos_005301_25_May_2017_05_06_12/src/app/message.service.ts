import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class MessageService {

    //Define the Subject
    subj:Subject<string> = new Subject<string>();
    //Use the Observables to exchange messages 
    constructor() { }

    sendMsg(msg:string):void{
        this.subj.next(msg);  //Add the msg to the stream 
    }
    getMsg():Observable<any>{
        return this.subj.asObservable();
    }
}