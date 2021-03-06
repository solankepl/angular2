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
var WelcomeComponent = (function () {
    function WelcomeComponent(router) {
        this.router = router;
        this.dateObj = new Date();
        this.message = "Welcome to my Application";
    }
    WelcomeComponent.prototype.ViewProducts = function () {
        this.router.navigate(['/products']);
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        selector: 'welcome',
        template: "<h2>{{message}}</h2>\n             <button (click)=\"ViewProducts()\">View Products</button><br>\n             Uppercase Pipe {{\"Angular\" | uppercase}}<br>\n             Date Pipe: {{dateObj| date:'medium'}}<br>\n             {{dateObj| date:'short'}}<br>\n             {{'345678' | phone}}\n             \n    \n    ",
        styles: ["\n        h2{\n            color:red;\n        }\n    \n    "]
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=welcome.component.js.map