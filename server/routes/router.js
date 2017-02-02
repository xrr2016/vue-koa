const app = require('../../app')
const router = require('koa-router')()
const User = require('../mongo').User
const Todo = require('../mongo').Todo

const user = require('koa-router')()
const todo = require('koa-router')()

router.get('/',function *(next){
  this.body = "Hello koa-router!"
})
//
// router.get('/login/:user',function *(next){
//     const user = this.params.user
//     this.body = `welcome ${user}`
// }

user.get('/:name',function *(next){
  const name = this.params.name
  this.body = `hello ${name}`
})

todo.get('/todo/create',function *(){
  this.body = 'create a todo'
})
todo.post('/todo/create',function *(next){
  Todo.insertOne({
        todoContent : 'code',
        todoStatus: false,
        todoType : 'important',
        planTime : '12:00 - 14:00',
        user : 'xrr2016'
        })
      .exec()
      .catch(e => console.log(e))
  yield next
})

module.exports = {
  router,
  user,
  todo
}
