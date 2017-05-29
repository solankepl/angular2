import { Component, OnInit } from '@angular/core';
import {Product} from './product';
import {ProductsService} from './products.service'
@Component({
    selector: 'mobile-products',
    template: `
            <h2>Mobile Products </h2>
            <table border="1">
            <tr *ngFor="let product of productList;let i=index">
            <td>{{product.name}}</td>
            <td>{{product.desc}}</td>
            <td><img [src]="product.imagePath" /></td>
            <td><button [disabled]="isAdmin">Edit</button></td>
            <td *ngIf="isAdmin"><button (click)="delete(i)">Delete</button></td>
            </tr>
            </table>
    `,
     styles:[`
    img{
        height:50px;
        width:50px;
    }
         
    
    `],
    
})
export class MobileProductsComponent implements OnInit {
    productList:Product[];
    constructor(private productservice:ProductsService) { }

    ngOnInit() { 
        this.productList = this.productservice.getProducts();
    }

}