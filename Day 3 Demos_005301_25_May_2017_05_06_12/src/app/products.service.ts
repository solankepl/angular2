import {Product} from './product';
import {Injectable} from '@angular/core'

@Injectable()
export class ProductsService{
    productList:Product[] = new Array<Product>();
    constructor(){
        console.log("Product Service Constructor called");
        let p1 = new Product(1,"MotoG4","Smart phone with selfie camera","Mobiles");
        let p2 = new Product(2,"SonyDSC","Smart Camera","Camera");
        let p3 = new Product(3,"Lenovo110","A Laptop for every need","Laptops");
        let p4 = new Product(4,"Xiomi55","Better, faster, longer with Redmi 4","Mobiles");
        let p5 = new Product(5,"Samsung Galaxy","Experience smooth multi-tasking with a 2 GB RAM. ","Mobiles");

        this.productList.push(p1);
        this.productList.push(p2);
        this.productList.push(p3);
        this.productList.push(p4);
        this.productList.push(p5);
    }
    getProducts():Product[]{
        return this.productList;
    }
}