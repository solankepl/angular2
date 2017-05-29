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
var photos_service_1 = require("./photos.service");
var PhotosComponent = (function () {
    function PhotosComponent(photosservice) {
        this.photosservice = photosservice;
        //Shud we make an Ajax call here?
        //Service are singletons 
    }
    PhotosComponent.prototype.ngOnInit = function () {
        // //ASych call
        // this.photosservice.getPhotos().then(response=>{
        //     //Filtering/processing logic can be done here
        //     this.photos = response;
        // })
        var _this = this;
        this.photosservice.getPhotos2().subscribe(function (photosData) {
            _this.photos = photosData;
        });
    };
    return PhotosComponent;
}());
PhotosComponent = __decorate([
    core_1.Component({
        selector: 'photos',
        template: "\n              <table>\n              <tr *ngFor=\"let photo of photos\">\n              <td>{{photo.id}}</td>\n              <td><img height=\"50px\" width=\"50px\" src=\"{{photo.url}}\"></td>\n              </tr>\n              </table>\n    \n    ",
        providers: [photos_service_1.PhotosService]
    }),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosComponent);
exports.PhotosComponent = PhotosComponent;
//# sourceMappingURL=photos.component.js.map