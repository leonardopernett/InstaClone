const userController = require('../controller/UserController')

const resolvers = {
   Query:{
    getOneUser: (_,{id} ) => userController.getOneUser(id),
    getUsers: () => userController.getUsers()
   },
   Mutation:{
     register: (_, {input} ) => userController.registerUser(input),
     login: (_,{input}) => userController.login(input)
   } 
}

module.exports = resolvers  