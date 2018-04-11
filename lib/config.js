const log = require('./logger');

module.exports = {
  server: {
    host: process.env.HOST || '0.0.0.0',
    port: parseInt(process.env.PORT, 10) || 3000,
  },
  rethinkdb: {
    servers: [
      {
        host: process.env.DB_HOST || 'localhost',
        port: parseInt(process.env.DB_PORT) || 28015,
      },
    ],
    db: process.env.DB_NAME || 'veidemann',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || '',
    log: log.info,
    silent: true,
  },
  cors: {origin: process.env.CORS_ALLOW_ORIGIN || '*'},
  error: {
    postFormat: (e, obj) => {
      if (process.env.NODE_ENV === 'production') delete obj.stack;
      return obj;
    },
  },
};
