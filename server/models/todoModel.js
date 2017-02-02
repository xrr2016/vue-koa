const Mongolass = require('mongolass');
const mongolass = new Mongolass()

module.exports = Todo = mongolass.model('Todo',{
  todoContent : { type:'string' },
  todaStatus:{ type:'boolean' },
  todoType: { type:'string' },
  planTime:{ type:'string' },
  user:{type:'string'}
})
