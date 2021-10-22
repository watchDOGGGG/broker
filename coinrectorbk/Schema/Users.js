const mongoose = require('mongoose')

const Users = new mongoose.Schema({
    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    password:{
        type:String
    },
    country:{
        type:String
    },
    active:{
        type:Number
    },
    refered_by:{
        type:String
    },
    refered_link:{
        type:String
    },
    address:{
        type:String
    },
    balance:{
        type:String,
    },
    deposit:{
        type:String
    },
    bonus:{
        type:String
    },
    
    currency:{
        type:String
    },
    
})
module.exports = mongoose.model('Users',Users)