import {Product} from './product';
import {Injectable} from '@angular/core'; 

@Injectable()
export class ProductsService{
    productList:Product[] = new Array<Product>();
    constructor() {
        let p1 =  new Product(2, "bag", 50);
        let p2 =  new Product(2, "mobile", 50);
        
        this.productList.push(p1);
        this.productList.push(p2);
    }


    getProducts():Product[]{
        console.log(this.productList);        
        return this.productList;
    }
}