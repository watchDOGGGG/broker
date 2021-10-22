const mongoose = require('mongoose')

const Deposit = new mongoose.Schema({
    user:{
        type:String
    },
    amount:{
        type:Number
    },
    Ptype:{
        type:String
    },
    status:{
        type:String
    },
    plan:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
})
module.exports = mongoose.model('Deposit',Deposit)