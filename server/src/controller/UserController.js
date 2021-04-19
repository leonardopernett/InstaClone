const User = require('../model/User')


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