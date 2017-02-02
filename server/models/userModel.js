const Mongolass = require('mongolass');
const mongolass = new Mongolass()

moudule.exports = User = mongolass.model('User',{
  password : { type:'string' },
  name : { type:'string' }
})
