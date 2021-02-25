const { PRODUCTS, DEFAULT_COUNT } = require("../constants");

const Query = {
  pingProduct: () => "GraphQL Server - Node Product - Running",
  topProducts: (_, { first = DEFAULT_COUNT }) => {
    try {
      const topProducts = PRODUCTS.slice(0, first);
      return topProducts;
    } catch (e) {
      console.error("Error in fetching top products", e);
    }
  },
};

module.exports = { Query };
