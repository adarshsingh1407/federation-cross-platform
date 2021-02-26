const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    /*
     * Use any combination of product and inventory service
     */
    // {
    //   name: "springboot-product",
    //   url: "http://localhost:5003/graphql",
    // },
    {
      name: "springboot-inventory",
      url: "http://localhost:5004/graphql",
    },
    { name: "node-product", url: "http://localhost:8001/graphql" },
    // {
    //   name: "node-inventory",
    //   url: "http://localhost:8002/graphql",
    // },
  ],
  __exposeQueryPlanExperimental: false,
});

(async () => {
  const server = new ApolloServer({
    gateway,

    // Apollo Graph Manager (previously known as Apollo Engine)
    // When enabled and an `ENGINE_API_KEY` is set in the environment,
    // provides metrics, schema management and trace reporting.
    engine: false,

    // Subscriptions are unsupported but planned for a future Gateway version.
    subscriptions: false,
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
})();
