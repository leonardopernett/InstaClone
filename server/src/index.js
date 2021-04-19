require('dotenv').config({path:'.env'})

const express        = require('express')
const typeDefs       = require('./gql/schema')
const resolvers      = require('./gql/resolvers')
const {ApolloServer} = require('apollo-server-express')


//express config
const app = express()
const port = process.env.PORT || 3000
const server = new ApolloServer({
  typeDefs, resolvers
})

server.applyMiddleware({app})
/* database */
require('./database')

/* middleware */
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(3000,()=>console.log(`server startup http://localhost:${port}/graphql`))