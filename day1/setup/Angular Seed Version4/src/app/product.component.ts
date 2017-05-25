import {Product} from './product';
import {Component, OnInit} from '@angular/core'; 
import {ProductsService} from './products.service'; 

@Component({
    selector : 'products',
    template :`<ul> 
        <li *ngFor = "let product of productList; let i=index">
            {{name.value}}
            <input type="text" #name (keypress) = "validate(name.value)" /> 

            {{product.productName}}  
            <button (click) = "delete(i)">delete</button>
        </li>
    </ul>
    <mobile-products></mobile-products>    
    `,
    providers:[ProductsService]    
})

export class ProductComponent implements onInit{
    productList:Product[];
    
    constructor(private productservice:ProductsService) {
        //this.productList = productservice.getProducts();
    } 

    delete(index:number):void{
        this.productList.splice(index, 1);
    }

    validate():void{
        console.log("dasasd");    
    }
    
    ngOnInit(){
        //invoke the service call here 
        this.productList =  this.productservice.getProducts();
    }

}