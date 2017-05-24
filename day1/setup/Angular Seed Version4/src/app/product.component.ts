import {Product} from './product';
import {Component} from '@angular/core'; 

@Component({
    selector : 'products',
    template :`<ul> 
        <li *ngFor = "let product of productList; let i=index">
            {{name.value}}
            <input type="text" #name (keypress) = "validate(name.value)" /> 

            {{product.name}}  
            <button (click) = "delete(i)">delete</button>
        </li>
    </ul>`    
})

export class ProductComponent{
    productList:Product[] = new Array<Product>();
    constructor(){
        let p1 =  new Product(2, "bag", 50);
        let p2 =  new Product(2, "mobile", 50);
        this.productList.push(p1);
        this.productList.push(p2);
    } 

    delete(index:number):void{
        this.productList.splice(index, 1);
    }

    validate():void{
        console.log("dasasd");    
    }

}