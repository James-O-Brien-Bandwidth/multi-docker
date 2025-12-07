const {
  REDIS_HOST,
  REDIS_PORT,
  PGUSER,
  PGHOST,
  PGDATABASE,
  PGPASSWORD,
  PGPORT,
} = process.env;

module.exports = {
  redisHost: REDIS_HOST,
  redisPort: REDIS_PORT,
  pgUser: PGUSER,
  pgHost: PGHOST,
  pgDatabase: PGDATABASE,
  pgPassword: PGPASSWORD,
  pgPort: PGPORT,
};
