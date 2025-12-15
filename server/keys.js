const {
  REDIS_HOST,
  REDIS_PORT,
  PGUSER,
  PGHOST,
  PGDATABASE,
  PGPASSWORD,
  PGPORT,
} = process.env;
// In elastic beanstalk, these environment variables are set in the configuration. And these variables get hooked into every service :) ... so we only have to specify in the one place
module.exports = {
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT,
  pgUser: PGUSER,
  pgHost: PGHOST,
  pgDatabase: PGDATABASE,
  pgPassword: PGPASSWORD,
  pgPort: PGPORT,
};
