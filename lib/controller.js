const config = require('./config');
const r = require('rethinkdbdash')(config.rethinkdb);


module.exports = {
  async getWarcStat(ctx) {
    ctx.body = await r.db('report').table('invalid_warcs').run();
  },

  async getNumberOfInvalidWarcs(ctx) {
    ctx.body = await r.db('report').table('invalid_warcs').count().run();
  },

  async getNumberOfValidWarcs(ctx) {
    ctx.body = await r.db('report').table('valid_warcs').count().run();
  },
};
