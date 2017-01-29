const app = require('koa')()
const router = require('koa-router')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')

app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(router())

app.use(function*(next) {
  let start = Date.now()
  yield next
  let ms = Date.now() - start
  console.log('%s %s - %s', this.method, this.url, ms)
})

app.on('error', (err, next) => {
  console.log('error',err.message)
})

app.listen(2333,() => {
  console.log('server listening on port 2333')
})

module.exports = app
