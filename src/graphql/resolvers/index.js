import urlResolvers from './shortUrl';

const resolvers = {
  Query: {
    ...urlResolvers.Query,
  },
};

export default resolvers;
