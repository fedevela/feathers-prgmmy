const xycoords = require('./xycoords/xycoords.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(xycoords);
};
