const mongoose=require('mongoose')

const userSchema=mongoose.Schema({

name:{
    type:String,
    required:[true,'Please add a name'],
},
email:{
    type:String,
    required:[true,'Please add a an email'],
    unique:true
},
password:{
    type: String,
    required:[true,'Please add a password'],
    unique:true
},
isAdmin:{
    type:Boolean,required:true,default:true
}



},{timestamps:true,})

module.exports=mongoose.model('User',userSchema)