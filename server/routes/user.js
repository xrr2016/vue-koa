const User = require('../models/mongo').User;
const user = require('koa-router')();

user.get('/user',function *(next){
  this.body = "hello from user"
});

user.get('/user/login',function *(next){
  this.body = "user login"
});

user.post('/user/signup',function *(next){
    User.insertOne({name : "xrr2016",password : "0000"})
                              .exec()
                              .then(console.log)
                              .catch((err) => {
                                console.log(err);
                              })
    this.body = {
      success : true
    }
})

module.exports = user
