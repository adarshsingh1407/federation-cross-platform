const fs = require("fs");
const { ApolloServer, gql } = require("apollo-server-express");
const { buildFederatedSchema } = require("@apollo/federation");
const { mergeResolvers } = require("merge-graphql-schemas");
const rootResolver = require("./resolvers");
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");

const port = 8002;

const app = express();
app.use(cors(), bodyParser.json());

const typeDefs = gql(
  fs.readFileSync("./schema/schema.graphql", { encoding: "utf8" })
);

const resolvers = mergeResolvers(rootResolver);

const apolloServer = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () =>
  console.info(`GraphQL Server - Node Product - Running on port ${port}`)
);
