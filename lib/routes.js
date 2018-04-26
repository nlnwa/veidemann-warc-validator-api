const _ = require('koa-route');
const ctl = require('./controller');

module.exports = [
  _.get('/validator/api/', ctl.getWarcStat),
  _.get('/validator/api/invalid', ctl.getNumberOfInvalidWarcs),
  _.get('/validator/api/valid', ctl.getNumberOfValidWarcs),
  _.get('/validator/api/healthz', (ctx) => ctx.body = {message: 'api works!'}),
];
