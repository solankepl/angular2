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
var product_1 = require("./product");
var core_1 = require("@angular/core");
var ProductsService = (function () {
    function ProductsService() {
        this.productList = new Array();
        console.log("Product Service Constructor called");
        var p1 = new product_1.Product(1, "MotoG4", "Smart phone with selfie camera", "Mobiles");
        var p2 = new product_1.Product(2, "SonyDSC", "Smart Camera", "Camera");
        var p3 = new product_1.Product(3, "Lenovo110", "A Laptop for every need", "Laptops");
        var p4 = new product_1.Product(4, "Xiomi55", "Better, faster, longer with Redmi 4", "Mobiles");
        var p5 = new product_1.Product(5, "Samsung Galaxy", "Experience smooth multi-tasking with a 2 GB RAM. ", "Mobiles");
        this.productList.push(p1);
        this.productList.push(p2);
        this.productList.push(p3);
        this.productList.push(p4);
        this.productList.push(p5);
    }
    ProductsService.prototype.getProducts = function () {
        return this.productList;
    };
    return ProductsService;
}());
ProductsService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map