import 'dotenv/config';
import pgp from 'pg-promise';
import promise from 'bluebird';
import * as queries from './queries';
import config from '../config';

const pg = pgp({ promiseLib: promise, noWarnings: true });
const db = pg(config.SHORTEN_URL_DATABASE_SYSTEM);

export { db, queries };
