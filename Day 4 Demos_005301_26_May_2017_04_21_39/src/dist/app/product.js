"use strict";
//Model class for product
var Product = (function () {
    function Product(id, name, desc, category) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.desc = desc;
        this.imagePath = "images/" + id + ".jpg";
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map