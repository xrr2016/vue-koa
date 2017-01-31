const app = require('../../app')
const router = require('koa-router')()
const User = require('../mongo').User
const Todo = require('../mongo').Todo


router.get('/',function *(next){
  this.body = "Hello koa-router!"
})

User.insertOne({name:'xrr2016',password:'1234'})
    .exec()
    .then()
    .catch(e => console.log(e))

Todo.insertOne({todoContent:'play'}).exec()

module.exports = router
