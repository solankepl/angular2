import {Product} from './product';
import {Component,OnInit} from '@angular/core'

@Component({
    selector:'products',
    template:`
            <h2>List of Products</h2>
            <a routerLink="men">Men</a>
            <a routerLink="women">Women</a>
            <a routerLink="kids">Kids</a>

            <router-outlet></router-outlet>
    
    `,
    styles:[`
    img{
        height:50px;
        width:50px;
    }
    .admin{
        color:red;
    }
    .special{
        font-size:18px;
    }
        
    
    `]
    
})
export class ProductsComponent  {

    
    isAdmin:boolean=true;
    currentClasses={};
    
    //private will automatically set an instance var ref. 
    constructor(){
        console.log("Constructor for Products Component");
        this.currentClasses={
            admin:this.isAdmin,
            special:true
        }
    }
    
    
}