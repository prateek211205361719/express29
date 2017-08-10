
var mongoose = require('mongoose');
var users = mongoose.model('users', {
    email:{
        type:String,
        trim:true,
        required:true
    },
    
});

module.exports = {users};