const mongoose = require('mongoose')

const lanSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String
    },
    category:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Lan", lanSchema)