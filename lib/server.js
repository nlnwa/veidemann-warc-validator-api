   const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const body = require('koa-json-body');
const error = require('koa-json-error');
const log = require('./logger');
const routes = require('./routes');
const config = require('./config');


app.use(error(config.error));
app.use(cors(config.cors));
app.use(body());
routes.forEach((route) => app.use(route));

app.listen(
  config.server.port,
  config.server.host,
  () => log.info(`Listening on ${config.server.host}:${config.server.port}`));
