import {Product} from './product';
import {Component,OnInit} from '@angular/core'
import {ProductsService} from './products.service'
@Component({
    selector:'products',
    template:`
            <h2>List of Products</h2>
            <p [ngClass]="currentClasses">List of Products</p><br>
            <input type="text" #name (keyup)="validate(name.value)" />{{name.value}}

            <table border="1">
            <tr *ngFor="let product of productList;let i=index">
            <td>{{product.name}}</td>
            <td>{{product.desc}}</td>
            <td><img [src]="product.imagePath" /></td>
            <td><button [disabled]="isAdmin">Edit</button></td>
            <td *ngIf="isAdmin"><button (click)="delete(i)">Delete</button></td>
            </tr>
            </table>
            <mobile-products></mobile-products>
    
    
    `,
    styles:[`
    img{
        height:50px;
        width:50px;
    }
    .admin{
        color:red;
    }
    .special{
        font-size:18px;
    }
        
    
    `],
    providers:[{provide:ProductsService, useClass:ProductsService}]
})
export class ProductsComponent implements OnInit {

    productList:Product[];
    isAdmin:boolean=true;
    currentClasses={};
    
    //private will automatically set an instance var ref. 
    constructor(private productservice:ProductsService){
        console.log("Constructor for Products Component");
        this.currentClasses={
            admin:this.isAdmin,
            special:true
        }
    }
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