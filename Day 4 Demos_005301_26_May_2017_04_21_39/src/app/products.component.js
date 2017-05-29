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
var ProductsComponent = (function () {
    //private will automatically set an instance var ref. 
    function ProductsComponent() {
        this.isAdmin = true;
        this.currentClasses = {};
        console.log("Constructor for Products Component");
        this.currentClasses = {
            admin: this.isAdmin,
            special: true
        };
    }
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'products',
        template: "\n            <h2>List of Products</h2>\n            <a routerLink=\"men\">Men</a>\n            <a routerLink=\"women\">Women</a>\n            <a routerLink=\"kids\">Kids</a>\n\n            <router-outlet></router-outlet>\n    \n    ",
        styles: ["\n    img{\n        height:50px;\n        width:50px;\n    }\n    .admin{\n        color:red;\n    }\n    .special{\n        font-size:18px;\n    }\n        \n    \n    "]
    }),
    __metadata("design:paramtypes", [])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map