const config = require('./config');
const r = require('rethinkdbdash')(config.rethinkdb);


module.exports = {
  async getWarcStat(ctx) {
    ctx.body = await r.db('report').table('unvalid_warcs').run();
  },
};
