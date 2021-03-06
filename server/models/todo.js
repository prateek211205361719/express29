var mongoose = require('mongoose');
var todo = mongoose.model('todo', {
    text:{
        type:String,
        trim:true,
        required:true
    },
    completed:{
        type:Boolean,
        default:false,
    },
    completedAt:{
        type: Number,
        default:null,
    }
});

module.exports = {todo};