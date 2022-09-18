const addition = require('../lib/addition').addition
const test = require('tap').test

test('addition identity', t => {
  t.plan(2)
  t.equal(addition(1, 0), 1)
  t.equal(addition(0, 1), 1)
})
