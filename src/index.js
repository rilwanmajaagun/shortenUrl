import 'dotenv/config';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { db } from './database/index';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import redirect from './middleware/redirect';
import config from './config';

const port = process.env.PORT || 4000;
async function startApolloServer() {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();

  server.applyMiddleware({ app });

  app.use(redirect);

  await new Promise((resolve) => app.listen({ port }, resolve));
  console.log(`🚀 Server ready at ${config.HOST}${server.graphqlPath}`);
  return { server, app };
}

db.connect()
  .then((obj) => {
    obj.done();
    startApolloServer();
  }).catch((error) => {
    console.log(error);
  });
