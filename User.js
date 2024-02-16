const mongoose = require('mongoose')

const Users = mongoose.model('User', {
    nombre:{type: String, require:true},
    apellido:{type: String, require:true},
    Email:{type:String, require:true},
    organizacion:{type:String}
})

module.exports = Users