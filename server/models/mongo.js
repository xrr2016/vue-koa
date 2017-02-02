const config = require('../config/config')
const Mongolass = require('mongolass')
const mongolass = new Mongolass()
const User = require('./userModel')
const Todo = require('./todoModel')

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

module.exports = {
  User,
  Todo
}
