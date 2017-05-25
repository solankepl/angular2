"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var SignUpFormComponent = (function () {
    function SignUpFormComponent() {
        this.user = {
            name: 'James',
            phone: "1234",
            address: 'India'
        };
    }
    SignUpFormComponent.prototype.postForm = function (userform) {
        alert("ssss" + userform.name);
    };
    return SignUpFormComponent;
}());
SignUpFormComponent = __decorate([
    core_1.Component({
        selector: 'userform',
        templateUrl: 'app/signupform.component.html',
        styles: ["\n       \n    input.ng-invalid{\n          border-left: 5px solid #ffFF00;\n    } \n\n    input.ng-valid{\n            border-left: 5px solid #00FF00;\n    }\n\n  "]
    })
], SignUpFormComponent);
exports.SignUpFormComponent = SignUpFormComponent;
//# sourceMappingURL=signupform.component.js.map