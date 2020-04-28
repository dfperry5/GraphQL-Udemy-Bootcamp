// NPM Dependencies
import { ApolloServer } from 'apollo-server-express'
import https from 'https';
import fs from 'fs';

// Inner App Dependencies
import typeDefs from './schemas'
import resolvers from './resolvers'
import app from './middleware'

// Create GraphQL Layer
const apolloGql = new ApolloServer({
    typeDefs,
    resolvers,
    graphqlPath: "/graphql"
})

// Apply other express middleware and define path
apolloGql.applyMiddleware({
    app, 
    path: '/bootcamp'
})

// could add https certs in here
const options = {}

// Create Server
const server = https.createServer(
    options,
    app
)

// Start Server
app.listen({
    port: 8443
}, () => {
    console.log(`Server ready at https://localhost:8443/graphql`);
})