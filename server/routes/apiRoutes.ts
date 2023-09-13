module.exports = function (router: any) {
  const checkoutController = require("../controllers/checkoutController");
  const productController = require("../controllers/productController");
  const categoryController = require("../controllers/categoryController");

  router.post("/checkout", checkoutController.createCheckoutSession);
  router.get("/products", productController.getProducts);
  router.get(
    "/products/category/:category",
    productController.getSortedProducts
  );
  router.get("products/categories", categoryController.getCategories);
};
