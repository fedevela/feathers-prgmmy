const assert = require('assert');
const app = require('../../src/app');

describe('\'xycoords\' service', () => {
  it('registered the service', () => {
    const service = app.service('xycoords');

    assert.ok(service, 'Registered the service');
  });
});
