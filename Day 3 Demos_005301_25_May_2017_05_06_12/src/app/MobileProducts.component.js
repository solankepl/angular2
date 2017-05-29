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
var MobileProductsComponent = (function () {
    function MobileProductsComponent(productservice) {
        this.productservice = productservice;
    }
    MobileProductsComponent.prototype.ngOnInit = function () {
        this.productList = this.productservice.getProducts();
    };
    return MobileProductsComponent;
}());
MobileProductsComponent = __decorate([
    core_1.Component({
        selector: 'mobile-products',
        template: "\n            <h2>Mobile Products </h2>\n            <table border=\"1\">\n            <tr *ngFor=\"let product of productList;let i=index\">\n            <td>{{product.name}}</td>\n            <td>{{product.desc}}</td>\n            <td><img [src]=\"product.imagePath\" /></td>\n            <td><button [disabled]=\"isAdmin\">Edit</button></td>\n            <td *ngIf=\"isAdmin\"><button (click)=\"delete(i)\">Delete</button></td>\n            </tr>\n            </table>\n    ",
        styles: ["\n    img{\n        height:50px;\n        width:50px;\n    }\n         \n    \n    "],
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], MobileProductsComponent);
exports.MobileProductsComponent = MobileProductsComponent;
//# sourceMappingURL=MobileProducts.component.js.map