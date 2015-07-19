# koa-add-to-context

Koa middleware to add all enumerable keys to the context of each request

## Installation

```sh
$ npm i koa-add-to-context
```

## Usage

```js
var addToContext = require('koa-add-to-context')
var koa = require('koa')

var app = koa()
app.use(addToContext({ foo: 'foo' }))
app.use(function * () {
  this.body = this.foo
})
```

## API

```js
addToContext(obj: Object): GeneratorFunction
```

## Test

```sh
npm test
```

## License

MIT
