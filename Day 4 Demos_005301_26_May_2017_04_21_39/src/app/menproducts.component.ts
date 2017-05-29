import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductsService} from './products.service'
@Component({
    
    selector: 'men-products',
    template: `<h2>Men Products</h2>			 
                <p [ngClass]="currentClasses">List of Products</p><br>
            <input type="text" #name (keyup)="validate(name.value)" />{{name.value}}

            <table border="1">
            <tr *ngFor="let product of productList;let i=index">
            <td><a [routerLink]="['productdetails',product.id]">{{product.name}}</a></td>
            <td>{{product.desc}}</td>
            <td><img [src]="product.imagePath" /></td>
            <td><button [disabled]="isAdmin">Edit</button></td>
            <td *ngIf="isAdmin"><button (click)="delete(i)">Delete</button></td>
            </tr>
            </table>
            <router-outlet></router-outlet>
    
	`,
    styles:[`
    img{
        height:50px;
        width:50px;
    }
    
        
    
    `],
    providers:[{provide:ProductsService, useClass:ProductsService}]
})
export class MenProductsComponent implements OnInit {
       productList:Product[];
       constructor(private productservice:ProductsService){}
    delete(index:number):void{
        //delete the element from the productList
        this.productList.splice(index,1);
    }
    validate():void{
        console.log('Validating');
    }
    ngOnInit() {
        console.log("NgOnit for Products Component called ");
        //Invoke service calls here 
        //Invoked after the constructor 
        this.productList = this.productservice.getProducts();
     }
}