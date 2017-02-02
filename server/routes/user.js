import { User } from '../models/mongo';
const router = require('koa-router');

const user = new router();

user.get('/',function *(next){
  this.body = "hello from user"
});
