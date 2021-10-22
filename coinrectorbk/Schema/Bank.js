const mongoose = require('mongoose')

const BankInfo = new mongoose.Schema({
    User:{
        type:String
    },
    BankName:{
        type:String
    },
    AcctName:{
        type:String
    },
    AcctNum:{
        type:String
    },
    Btc:{
        type:String
    },
    Ltc:{
        type:String
    },
    Eth:{
        type:String
    },
})
module.exports = mongoose.model('BankInfo',BankInfo)