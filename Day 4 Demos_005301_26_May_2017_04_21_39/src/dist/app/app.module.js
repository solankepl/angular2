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
var router_1 = require("@angular/router");
var menproducts_component_1 = require("./menproducts.component");
var womenproducts_component_1 = require("./womenproducts.component");
var kidsproducts_component_1 = require("./kidsproducts.component");
var productdetails_component_1 = require("./productdetails.component");
var http_1 = require("@angular/http");
var photos_component_1 = require("./photos.component");
var phone_pipe_1 = require("./phone.pipe");
var routes = [
    {
        path: '',
        component: photos_component_1.PhotosComponent
    },
    {
        path: 'welcome',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'products',
        component: products_component_1.ProductsComponent,
        children: [
            {
                path: 'men',
                component: menproducts_component_1.MenProductsComponent,
                children: [
                    {
                        path: 'productdetails/:id',
                        component: productdetails_component_1.ProductDetailsComponent
                    }
                ]
            },
            {
                path: 'women',
                component: womenproducts_component_1.WomenProductsComponent
            },
            {
                path: 'kids',
                component: kidsproducts_component_1.KidsProductsComponent
            }
        ]
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'userform',
        component: signupform_component_1.SignUpFormComponent
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(routes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, phone_pipe_1.PhonePipe, photos_component_1.PhotosComponent, welcome_component_1.WelcomeComponent, products_component_1.ProductsComponent, login_component_1.LoginComponent, MobileProducts_component_1.MobileProductsComponent, parent_component_1.ParentComponent, child1_component_1.Child1Component, child2_component_1.Child2Component, signupform_component_1.SignUpFormComponent, menu_component_1.MenuComponent, menproducts_component_1.MenProductsComponent, womenproducts_component_1.WomenProductsComponent, kidsproducts_component_1.KidsProductsComponent, productdetails_component_1.ProductDetailsComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map