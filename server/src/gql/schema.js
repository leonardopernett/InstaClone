const {gql} = require('apollo-server-express')

const typeDefs = gql`
scalar Date
    type Query {
       hello:String
       getUsers:[User]
       getOneUser(id:String):User
    }

    type Mutation {
       register(input:UserInput):User
    } 

    type User {
        id:ID
        name:String 
        username:String
        email:String
        avatar:String
        website:String
        description:String 
        password:String
        createAt:Date
    }

    input UserInput{
        name:String!
        username:String!
        email:String!
        password:String!
    }
`

module.exports=typeDefs