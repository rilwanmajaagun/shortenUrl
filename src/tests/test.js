import 'dotenv/config';
import faker from 'faker';
import { ApolloServer, gql } from 'apollo-server-express';
import { createTestClient } from 'apollo-server-testing';
import resolvers from '../graphql/resolvers/index';
import typeDefs from '../graphql/typeDefs';
import config from '../config';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { query } = createTestClient(server);

test('return error if url is invalid', async () => {
  const SHORTEN_URL = gql`
    query {
      shortenUrl(url: "lllk://")
    }
  `;

  const { errors: [errors] } = await query({ query: SHORTEN_URL });
  expect(errors.message).toMatch('Invalid Url');
});

test('shorten url', async () => {
  const url = faker.internet.url();
  const SHORTEN_URL = gql`
    query {
      shortenUrl(url: "${url}")
    }
  `;

  const { data: { shortenUrl } } = await query({ query: SHORTEN_URL });
  expect(shortenUrl).toMatch(new RegExp(`${config.HOST}`));
});
