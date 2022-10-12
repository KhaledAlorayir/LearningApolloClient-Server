import { ApolloServer } from "apollo-server";
import { Context } from "./constant/interfaces";
import resolvers from "./resolvers";
import schema from "./schema";
import prisma from "./constant/prismaClient";

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: (): Context => {
    return { prisma };
  },
});

server.listen().then(({ url }) => {
  console.log("running at " + url);
});
