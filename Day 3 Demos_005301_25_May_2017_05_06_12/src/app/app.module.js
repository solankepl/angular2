"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome.component");
var products_component_1 = require("./products.component");
var login_component_1 = require("./login.component");
var forms_1 = require("@angular/forms");
var MobileProducts_component_1 = require("./MobileProducts.component");
var parent_component_1 = require("./parent.component");
var child1_component_1 = require("./child1.component");
var child2_component_1 = require("./child2.component");
var signupform_component_1 = require("./signupform.component");
var menu_component_1 = require("./menu.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, products_component_1.ProductsComponent, login_component_1.LoginComponent, MobileProducts_component_1.MobileProductsComponent, parent_component_1.ParentComponent, child1_component_1.Child1Component, child2_component_1.Child2Component, signupform_component_1.SignUpFormComponent, menu_component_1.MenuComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map