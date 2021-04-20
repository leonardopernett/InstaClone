/* env config */
require('dotenv').config({path:'.env'})

/* import libraries */
const express        = require('express')
const typeDefs       = require('./gql/schema')
const resolvers      = require('./gql/resolvers')
const {ApolloServer} = require('apollo-server-express')


//express config
const app = express()
const port = process.env.PORT || 3000

/* connection apollo */
const server = new ApolloServer({
  typeDefs, resolvers
})

/* database */
require('./database')

/* middleware */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

/* integration express */
server.applyMiddleware({app})

/* lister port */
app.listen(3000,()=>console.log(`server startup http://localhost:${port}/graphql`))