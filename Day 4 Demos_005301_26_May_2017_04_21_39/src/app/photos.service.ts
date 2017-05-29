import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable'

@Injectable()
export class PhotosService {

    //We can inject one service inside another service 
    constructor(private http:Http) { }
    //Approach1: Promises 
    getPhotos():Promise<any>{
        //Here we will make Ajax calls 
        //Which service?? Http Service 
        return this.http.get('https://jsonplaceholder.typicode.com/photos').toPromise().then(response=>response.json());
    }

    //Approach2: Observables
    getPhotos2():Observable<any>{
        return this.http.get('https://jsonplaceholder.typicode.com/photos').map(response=>response.json());

    }


}