const app = require('koa')()
const router = require('./server/routes/index')
const bodyParser = require('koa-bodyparser')
const json = require('koa-json')
const logger = require('koa-logger')
const favicon = require('koa-favicon')

app.use(bodyParser())
app.use(json())
app.use(logger())
app.use(favicon(__dirname + '/public/favicon.png'))

app.use(router.routes())

app.on('error', (err, next) => {
  console.log('error',err.message)
})

app.listen(2333,() => {
  console.log('server listening on port 2333')
})

module.exports = app
