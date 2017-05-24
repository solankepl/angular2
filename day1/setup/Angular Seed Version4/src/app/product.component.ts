import {Product} from './product';
import {Componet} from '@angular/core'; 

@Component({
    selector : 'products',
    template :`<ul> 
        <li *ngFor = "let product of productList">{{product.name}}</li>
    </ul>`
    
})

export class ProductComponent{
    productList:Product[] = new ArrayProduct();
    constructor(){
        let p1 =  new Product(2, "bag", 50);
        let p2 =  new Product(2, "mobile", 50);
        this.productList.push(p1);
        this.productList.push(p2);
    } 

}