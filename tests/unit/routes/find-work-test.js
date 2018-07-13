import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | find-work', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:find-work');
    assert.ok(route);
  });
});
