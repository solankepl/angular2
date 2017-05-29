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
    function Child1Component(messageservice) {
        this.messageservice = messageservice;
        this.update = new core_1.EventEmitter();
    }
    Child1Component.prototype.change = function (newname) {
        //Emit this value to the parent 
        //We will create a custom event here called as "update"
        this.update.emit(newname);
    };
    Child1Component.prototype.ngOnInit = function () { };
    Child1Component.prototype.sendMsg = function (msg) {
        //invoke the MessageService -- sendMsg()
        this.messageservice.sendMsg(msg);
    };
    return Child1Component;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Child1Component.prototype, "name", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], Child1Component.prototype, "update", void 0);
Child1Component = __decorate([
    core_1.Component({
        selector: 'child1',
        template: "<h2>Child1 Component with name {{name}} </h2>\n                Enter New Name: <input type=\"text\" #input /><button (click)=\"change(input.value)\">Change</button><br>\n                Enter Message: <input type=\"text\" #msg /><button (click)=\"sendMsg(msg.value)\">Send Message</button>\n    "
    }),
    __metadata("design:paramtypes", [message_service_1.MessageService])
], Child1Component);
exports.Child1Component = Child1Component;
//# sourceMappingURL=child1.component.js.map