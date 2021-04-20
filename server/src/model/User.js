const {Schema, model} = require('mongoose')
const bcrypt = require('bcryptjs') 
const userSchema = new Schema({
   name:{
     type:String,
     require:true,
   },
   username:{
    type:String,
    require:true,
    unique:true,
    trim:true
   },
   email:{
     type:String,
     require:true,
     unique:true,
     trim:true
   },

   password:{
    type:String,
    require:true,
    trim:true
  },
   avatar:{
     type:String,
     trim:true
   },

   website:{
     type:String,
     trim:true
   },

   description:{
    type:String,
    trim:true
  },
  createAt:{
    type:Date,
    default: Date.now()
  }

},{
  timestamps:true,
  versionKey:false,
})


userSchema.statics.encryptPassword = async (password)=>{
   const salt = await bcrypt.genSalt(10)
   return await bcrypt.hash(password, salt)
}

userSchema.methods.comparePassword = async function(password){
  return await bcrypt.compare(password, this.password)
}

module.exports = model('User',userSchema)