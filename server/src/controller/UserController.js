const User = require('../model/User')
const {verifyToken} = require('../jwt/verifyToken')

exports.registerUser = async (input)=>{
      const {name, email, username, password} = input
            
      const emailFound = await User.findOne({email})
      if(emailFound) throw new Error('email already exist')

      const usernameFound = await User.findOne({username})
      if(usernameFound) throw new Error('username already exist')

      const user    = new User()
      user.name     = name 
      user.email    = email.toLowerCase()
      user.username = username
      user.password = await User.encryptPassword(password)

      await user.save() 
      return user
}

exports.getUsers = async  ()=>{
  try {
    const users = await User.find()
    return users
  } catch (error) {
     console.log(error)
   }
    
}

exports.getOneUser = async(id)=>{
    const user = await User.findOne({_id:id})
    return user
}

exports.login = async (input)=>{
  const { email, password } = input

  const userFound = await User.findOne({email:email.toLowerCase()})
  if(!userFound) throw new Error('Email or password incorrect')

  const match = await userFound.comparePassword(password)
  if(!match)throw new Error('Email or password incorrect')

  const token = verifyToken(userFound, process.env.SECRET_KEY, '1h')
  return {token}
}