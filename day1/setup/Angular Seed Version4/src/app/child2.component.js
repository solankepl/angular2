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
var message_service_1 = require("./message.service");
var Child2Component = (function () {
    function Child2Component(messageService) {
        var _this = this;
        this.messageService = messageService;
        this.messageService.getMsg().subscribe(function (Response) {
            _this.message = Response;
        });
    }
    Child2Component.prototype.ngOnInit = function () {
    };
    return Child2Component;
}());
Child2Component = __decorate([
    core_1.Component({
        selector: 'child-2',
        template: "<h2>chilid 2 Component {{message}}</h2>\n    "
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], Child2Component);
exports.Child2Component = Child2Component;
//# sourceMappingURL=child2.component.js.map