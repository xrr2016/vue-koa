import { Todo } from '../models/mongo';
const router = require('koa-router');

const todo = new router();

todo.get('/',function *(next){
  this.body = "hello from todo"
});
