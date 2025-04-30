import packageJson from '../../package.json';

const env = {
  APP_VERSION: packageJson.version,
  APP_API: import.meta.env.VITE_API,
  ENVIRONMENT: import.meta.env.VITE_ENVIRONMENT,
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD,
};

if (env.IS_DEVELOPMENT) {
  console.log(env);
}

export default env;
