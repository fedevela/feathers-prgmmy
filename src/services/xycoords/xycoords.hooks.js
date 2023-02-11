

const xycoordsBeforeCreate = require('../../hooks/xycoords-before-create');

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [xycoordsBeforeCreate()],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
