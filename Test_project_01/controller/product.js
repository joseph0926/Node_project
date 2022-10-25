const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const desc = req.body.desc;
};

exports.getProducts = (req, res, next) => {
  Product.findAll()
    .then((product) => {
      res.render("product/product-list", {
        product: product,
        pageTitle: "All Products",
        path: "/products",
      });
    })
    .catch((err) => console.log(err));
};
