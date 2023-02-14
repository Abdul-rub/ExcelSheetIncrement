const mongoose = require('mongoose')


const Schema = mongoose.Schema

const InputSchema = new Schema({
    input:{type:String, required:true},
    output:{type:String, default:null}


})

const InputModel = mongoose.model("input", InputSchema)


module.exports = InputModel;