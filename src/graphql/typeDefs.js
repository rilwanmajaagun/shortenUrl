import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query{
    shortenUrl(url: String!): String!
  }
`;

export default typeDefs;
