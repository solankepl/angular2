import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'product-details',
    template: `<h2>Product Details for Product Id: {{productId}}`
})
export class ProductDetailsComponent implements OnInit {
    productId:number;
    constructor(private activatedRoute:ActivatedRoute){
        //Concept of Observables to fetch the URL params
        //URL params is of type Observables
        
        this.activatedRoute.params.subscribe(paramValues=>{
            this.productId = paramValues['id'];
        })
    }

    ngOnInit() { }
}