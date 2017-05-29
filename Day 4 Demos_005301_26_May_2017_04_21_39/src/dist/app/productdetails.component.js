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
var router_1 = require("@angular/router");
var ProductDetailsComponent = (function () {
    function ProductDetailsComponent(activatedRoute) {
        //Concept of Observables to fetch the URL params
        //URL params is of type Observables
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.activatedRoute.params.subscribe(function (paramValues) {
            _this.productId = paramValues['id'];
        });
    }
    ProductDetailsComponent.prototype.ngOnInit = function () { };
    return ProductDetailsComponent;
}());
ProductDetailsComponent = __decorate([
    core_1.Component({
        selector: 'product-details',
        template: "<h2>Product Details for Product Id: {{productId}}"
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ProductDetailsComponent);
exports.ProductDetailsComponent = ProductDetailsComponent;
//# sourceMappingURL=productdetails.component.js.map