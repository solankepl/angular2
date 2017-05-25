import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
    selector:'userform',
    templateUrl: 'app/signupform.component.html',
    styles: [`
       
    input.ng-invalid{
          border-left: 5px solid #ffFF00;
    } 

    input.ng-valid{
            border-left: 5px solid #00FF00;
    }

  `]
    
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }

    postForm(userform:User){
           alert("ssss"+ userform.name);
    }
 
}