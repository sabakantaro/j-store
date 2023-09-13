const products = require("../models/product");

const getProducts = (req: any, res: any) => {
  try {
    res.status(200).json(products);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  };
};

const getSortedProducts = (req: any, res: any) => {
  try {
    const { category } = req.params;
    const { sort, limit } = req.query;
    const sortedProducts = products.filter(
      (product: any) => product.category === category
    );
    if (sort === "desc") {
      sortedProducts.sort((a: any, b: any) => b.price - a.price);
    } else if (sort === "asc") {
      sortedProducts.sort((a: any, b: any) => a.price - b.price);
    }
    if (limit) {
      sortedProducts.splice(limit);
    }
    res.status(200).json(sortedProducts);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
};
