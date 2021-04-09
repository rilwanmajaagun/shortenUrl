import { UserInputError } from 'apollo-server';
import 'dotenv/config';
import config from '../../config';

import { queries, db } from '../../database';
import isUrl from '../../utils/validate';

const { BaseUrlQuery } = queries;
const UrlResolvers = {
  Query: {
    async shortenUrl(_, { url }) {
      let shortUrl = '';
      const valid = isUrl(url);
      if (!valid) {
        throw new UserInputError('Invalid Url');
      }
      const [result] = await db.any(BaseUrlQuery.getValidUrl, [url]);
      if (result) {
        shortUrl = `${config.HOST}/${result.hash_url}`;
        return shortUrl;
      }
      const hash = Math.random().toString(32).substring(2, 8);
      await db.any(BaseUrlQuery.createUrl, [hash, url]);
      shortUrl = `${config.HOST}/${hash}`;
      return shortUrl;
    },
  },
};

export default UrlResolvers;
