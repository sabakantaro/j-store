"use strict";
module.exports = function (router) {
    const checkoutController = require("../controllers/checkoutController");
    const productController = require("../controllers/productController");
    const categoryController = require("../controllers/categoryController");
    router.post("/checkout", checkoutController.createCheckoutSession);
    router.get("/products", productController.getProducts);
    router.get("/products/category/:category", productController.getSortedProducts);
    router.get("products/categories", categoryController.getCategories);
};
//# sourceMappingURL=apiRoutes.js.map