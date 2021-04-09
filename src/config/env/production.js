import 'dotenv/config';

const {
  SHORTEN_URL_PROD_DATABASE_SYSTEM,
  HOST,
} = process.env;

export default {
  SHORTEN_URL_DATABASE_SYSTEM: SHORTEN_URL_PROD_DATABASE_SYSTEM,
  HOST,
};
