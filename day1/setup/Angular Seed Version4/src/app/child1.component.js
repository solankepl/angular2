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
var Child1Component = (function () {
    function Child1Component(messageService) {
        this.messageService = messageService;
    }
    Child1Component.prototype.ngOnInit = function () {
    };
    Child1Component.prototype.sendMsg = function (msg) {
        this.messageService.sendMsg("test");
    };
    return Child1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Child1Component.prototype, "name", void 0);
Child1Component = __decorate([
    core_1.Component({
        selector: 'child-1',
        template: "<h2>chilid 1 Component {{name}}</h2>\n    "
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], Child1Component);
exports.Child1Component = Child1Component;
//# sourceMappingURL=child1.component.js.map