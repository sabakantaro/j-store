"use strict";
const products = require("../models/product");
const getProducts = (req, res) => {
    try {
        res.status(200).json(products);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
    ;
};
const getSortedProducts = (req, res) => {
    try {
        const { category } = req.params;
        const { sort, limit } = req.query;
        const sortedProducts = products.filter((product) => product.category === category);
        if (sort === "desc") {
            sortedProducts.sort((a, b) => b.price - a.price);
        }
        else if (sort === "asc") {
            sortedProducts.sort((a, b) => a.price - b.price);
        }
        if (limit) {
            sortedProducts.splice(limit);
        }
        res.status(200).json(sortedProducts);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};
module.exports = {
    getProducts,
};
//# sourceMappingURL=productController.js.map