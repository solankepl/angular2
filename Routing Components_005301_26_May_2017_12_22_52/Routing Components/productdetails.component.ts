import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-details',
    template: `<h2>Product Details for {{productId}}`
})
export class ProductDetailsComponent implements OnInit {
    productId:number;
    

    ngOnInit() { }
}