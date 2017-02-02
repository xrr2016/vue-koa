const config = require('../config/config')
const Mongolass = require('mongolass')
const mongolass = new Mongolass()

mongolass.connect(config.localdb)

mongolass.plugin('addCreatedAt',{
  afterFind(results){
    return results.map(result => {
      result.create_at = Date.now()
    })
  },
  afterFindOne(result){
     if(result){
       result.create_at = Date.now()
     }
    return result
  }
})

const Todo = mongolass.model('Todo',{
  todoContent : { type:'string' },
  todaStatus:{ type:'boolean' },
  todoType: { type:'string' },
  planTime:{ type:'string' },
  user:{type:'string'}
})

const User = mongolass.model('User',{
  password : { type:'string' },
  name : { type:'string' }
})

module.exports = {
  User,
  Todo
}
