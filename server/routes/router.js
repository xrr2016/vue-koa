const app = require('../../app')
const router = require('koa-router')()

router.get('/',function *(next){
  this.body = "Hello koa-router!"
})

module.exports = router
