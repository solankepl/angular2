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
var ProductComponent = (function () {
    function ProductComponent(productservice) {
        this.productservice = productservice;
        //this.productList = productservice.getProducts();
    }
    ProductComponent.prototype.delete = function (index) {
        this.productList.splice(index, 1);
    };
    ProductComponent.prototype.validate = function () {
        console.log("dasasd");
    };
    ProductComponent.prototype.ngOnInit = function () {
        //invoke the service call here 
        this.productList = this.productservice.getProducts();
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'products',
        template: "<ul> \n        <li *ngFor = \"let product of productList; let i=index\">\n            {{name.value}}\n            <input type=\"text\" #name (keypress) = \"validate(name.value)\" /> \n\n            {{product.productName}}  \n            <button (click) = \"delete(i)\">delete</button>\n        </li>\n    </ul>\n    <mobile-products></mobile-products>\n    ",
        providers: [products_service_1.ProductsService]
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map