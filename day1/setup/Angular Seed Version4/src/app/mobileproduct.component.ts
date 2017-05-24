import {Component} from '@angular/core';
import {Product} from './product';
import {ProductsService} from './products.service'; 

@Component({
    selector : 'mobile-products',
    template :`<h2>List</h2>
    `
})

export class MobileProductComponent{
   productList:Product[];
    
    constructor(private productservice:ProductsService) {
        //this.productList = productservice.getProducts();
    } 
    ngOnint(){
        this.productList =  this.productservice.getProducts();
    }

}