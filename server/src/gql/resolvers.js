const {registerUser} = require('../controller/UserController')

const resolvers ={
   Query:{
     hello:()=>{
       return "hola mundo desde graphql"
     },
     getOneUser:async (_,{id})=>{
      const user = await User.findOne({_id:id})
      return user
    },
     getUsers:async ()=>{
       try {
           const users = await User.find()
           return users
       } catch (error) {
           console.log(error)
       }
     }
   },

   Mutation:{
     register:async (_, {input})=>registerUser(input)
   } 
}

module.exports = resolvers  