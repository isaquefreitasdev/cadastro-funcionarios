const mongoose = require('mongoose');



const funcSchema = mongoose.Schema({
    nome:{type:String, required:true,minlength:4},
    cpf:{type:Number, required:true,minlength:11,maxlength:11},
    rg:{type:Number, required:true,minlength:8,maxlength:9},
    email:{type:String,required:true},
    phone:{type:Number,required:true,maxlength:9},
    bankAccount:{type:Number, required:true,maxlength:20},
    money:{type:Number, required:true}
})

const modelFuncionario = mongoose.model("model",funcSchema) 


module.exports = modelFuncionario;