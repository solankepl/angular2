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
var MobileProductComponent = (function () {
    function MobileProductComponent(productservice) {
        this.productservice = productservice;
        //this.productList = productservice.getProducts();
    }
    MobileProductComponent.prototype.ngOnint = function () {
        this.productList = this.productservice.getProducts();
    };
    return MobileProductComponent;
}());
MobileProductComponent = __decorate([
    core_1.Component({
        selector: 'mobile-products',
        template: "<h2>List</h2>\n    "
    }),
    __metadata("design:paramtypes", [products_service_1.ProductsService])
], MobileProductComponent);
exports.MobileProductComponent = MobileProductComponent;
//# sourceMappingURL=mobileproduct.component.js.map