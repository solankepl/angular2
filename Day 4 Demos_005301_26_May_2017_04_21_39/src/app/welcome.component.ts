import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector:'welcome',
    template:`<h2>{{message}}</h2>
             <button (click)="ViewProducts()">View Products</button><br>
             Uppercase Pipe {{"Angular" | uppercase}}<br>
             Date Pipe: {{dateObj| date:'medium'}}<br>
             {{dateObj| date:'short'}}<br>
             {{'345678' | phone}}
             
    
    `,
    styles:[`
        h2{
            color:red;
        }
    
    `]
})
export class WelcomeComponent{
    message:string;
    dateObj:Date = new Date();
    constructor(private router:Router){
        this.message="Welcome to my Application";
    }  
    ViewProducts():void{
        this.router.navigate(['/products']);
    }

}