const Mongolass = require('mongolass');
const mongolass = new Mongolass()

const User = mongolass.model('User',{
  password : { type:'string' },
  name : { type:'string' }
})

module.exports = User
