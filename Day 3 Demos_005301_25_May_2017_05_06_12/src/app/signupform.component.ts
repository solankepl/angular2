import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
    selector:'userform',
    templateUrl: 'app/signupform.component.html',
    styles:[`
            input.ng-invalid{
                border-left: solid 10px red;
            }
            input.ng-valid{
                border-left:solid 10px green;
            }
    `

    ]
    
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }
    postForm(){
        alert("Posting data for "+this.user.name);
    }
 
}