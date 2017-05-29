"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var products_service_1 = require("./products.service");
var ProductsComponent = (function () {
    //private will automatically set an instance var ref. 
    function ProductsComponent(productservice) {
        this.productservice = productservice;
        this.isAdmin = true;
        this.currentClasses = {};
        console.log("Constructor for Products Component");
        this.currentClasses = {
            admin: this.isAdmin,
            special: true
        };
    }
    ProductsComponent.prototype.delete = function (index) {
        //delete the element from the productList
        this.productList.splice(index, 1);
    };
    ProductsComponent.prototype.validate = function () {
        console.log('Validating');
    };
    ProductsComponent.prototype.ngOnInit = function () {
        console.log("NgOnit for Products Component called ");
        //Invoke service calls here 
        //Invoked after the constructor 
        this.productList = this.productservice.getProducts();
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'products',
        template: "\n            <h2>List of Products</h2>\n            <p [ngClass]=\"currentClasses\">List of Products</p><br>\n            <input type=\"text\" #name (keyup)=\"validate(name.value)\" />{{name.value}}\n\n            <table border=\"1\">\n            <tr *ngFor=\"let product of productList;let i=index\">\n            <td>{{product.name}}</td>\n            <td>{{product.desc}}</td>\n            <td><img [src]=\"product.imagePath\" /></td>\n            <td><button [disabled]=\"isAdmin\">Edit</button></td>\n            <td *ngIf=\"isAdmin\"><button (click)=\"delete(i)\">Delete</button></td>\n            </tr>\n            </table>\n            <mobile-products></mobile-products>\n    \n    \n    ",
        styles: ["\n    img{\n        height:50px;\n        width:50px;\n    }\n    .admin{\n        color:red;\n    }\n    .special{\n        font-size:18px;\n    }\n        \n    \n    "],
        providers: [{ provide: products_service_1.ProductsService, useClass: products_service_1.ProductsService }]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map