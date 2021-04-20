import {ApolloClient, InMemoryCache} from '@apollo/client'

export const client = new ApolloClient({
    uri:process.env.REACT_APP_URI,
    cache: new InMemoryCache(),
    connectToDevTools:true /* extension chrome apollo  */
})