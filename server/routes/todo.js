const Todo = require('../models/mongo').Todo;
const todo = require('koa-router')();


todo.get('/todo',function *(next){
  this.body = "hello from todo"
});

const createTodo = function *(next){
  yield Todo.insertOne()
}

module.exports = todo
