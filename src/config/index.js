import devEnv from './env/development';
import testEnv from './env/envtest';
import prodEnv from './env/production';

const { NODE_ENV } = process.env;

export default {
  development: devEnv,
  test: testEnv,
  production: prodEnv,
}[NODE_ENV || 'development'];
