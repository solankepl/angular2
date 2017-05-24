export class  Product {
    id:number;
    productName:string;
    quantity:number;

    constructor (id:number, productName:string, quantity:number ){
       this.id= id;
       this.productName = productName;
       this.quantity  = quantity;
    }
}