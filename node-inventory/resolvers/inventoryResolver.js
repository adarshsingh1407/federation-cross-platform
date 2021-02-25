const inventoryResolver = {
  Product: {
    quantity(product) {
      return product.upc.length;
    },
    inStock(product) {
      return product.upc.length > 0;
    },
  },
};

module.exports = inventoryResolver;
