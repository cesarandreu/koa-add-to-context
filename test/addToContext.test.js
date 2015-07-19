var test = require('tap').test
var addToContext = require('../lib/addToContext')
var GeneratorFunction = Object.getPrototypeOf(function * () {}).constructor

test('addToContext', function (t) {
  t.plan(6)

  t.throws(function () {
    addToContext(null)
  }, 'Throws with null argument')

  t.throws(function () {
    addToContext()
  }, 'Throws without arguments')

  t.doesNotThrow(function () {
    addToContext({})
  }, 'Succeeds with empty object')

  t.ok(
    addToContext({}) instanceof GeneratorFunction,
    'Returns GeneratorFunction'
  )

  var next = 'next'
  var context = {}
  var obj = { a: 'a', b: 'b' }
  var middleware = addToContext(obj)
  var iterator = middleware.call(context, next)
  var result = iterator.next()

  t.deepEqual(
    context, obj,
    'Adds obj enumerable keys to context'
  )

  t.equal(
    result.value, next,
    'Yields next'
  )
})
