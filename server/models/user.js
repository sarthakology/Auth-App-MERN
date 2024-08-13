const mongoose = require('mongoose');


const userDataSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const user = mongoose.model('users',userDataSchema);
module.exports = user;