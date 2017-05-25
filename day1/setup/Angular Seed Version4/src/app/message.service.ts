import {Injectable} from '@angular/core'; 
import {Subject} from 'rxjs/Subject'
import {Observable} from 'rxjs/Observable'
@Injectable()
export class MessageService{
    subj:Subject<string> = new Subject<string>();
    constructor() {
       
    }
    sendMsg(msg:string):void{
        this.subj.next(msg);
    }

    getMsg():Observable<any>{
          return this.subj.asObservable();  
    }
}