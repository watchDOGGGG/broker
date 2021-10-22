const mongoose = require('mongoose')

const Upload = new mongoose.Schema({
    User:{
        type:String
    },
    url:{
        type:String
    },
    from:{
        type:String
    },
    
})
module.exports = mongoose.model('Upload',Upload)