// Initializes the `xycoords` service on path `/xycoords`
const { Xycoords } = require('./xycoords.class');
const createModel = require('../../models/xycoords.model');
const hooks = require('./xycoords.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/xycoords', new Xycoords(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('xycoords');

  service.hooks(hooks);
};
