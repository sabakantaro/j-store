const categories = require("../models/category");

const getCategories = (req: any, res: any) => {
  res.json(categories);
};

module.exports = {
  getCategories,
};
