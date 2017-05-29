//Model class for product
export class Product{
    id:number;
    name:string;
    desc:string;
    category:string;
    imagePath:string;
    constructor(id:number,name:string,desc:string,category:string){
        this.id = id;
        this.name = name;
        this.category = category;
        this.desc = desc;
        this.imagePath="images/"+id+".jpg";
    }

}