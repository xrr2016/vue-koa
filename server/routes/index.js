const app = require('../../app');
const router = require('koa-router')()

router.get('/',function *(){
  this.body = "hello koa!"
})

module.exports = router
