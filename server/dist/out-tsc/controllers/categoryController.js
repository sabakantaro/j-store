"use strict";
const categories = require("../models/category");
const getCategories = (req, res) => {
    res.json(categories);
};
module.exports = {
    getCategories,
};
//# sourceMappingURL=categoryController.js.map