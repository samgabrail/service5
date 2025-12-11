const { test } = require('node:test');
const assert = require('node:assert');

test('basic test', () => {
  assert.strictEqual(1 + 1, 2);
});

test('service name is defined', () => {
  const serviceName = 'service5';
  assert.ok(serviceName.length > 0);
});
