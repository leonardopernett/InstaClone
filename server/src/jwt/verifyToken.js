const jwt = require('jsonwebtoken')

const verifyToken = (user, secret_KEY, expiresIn) =>{
  const {_id, email, username, name} = user

  const payload ={ id:_id, email, username, name }

   return  jwt.sign(payload,secret_KEY, {expiresIn:expiresIn})
}

module.exports={
  verifyToken
}